"use strict";

const fs = require("fs");
const path = require("path");
const mime = require("mime-types");
const set = require("lodash.set");
const {
  contact,
  faq,
  home,
  global,
} = require("../data/data.json");

async function isFirstRun() {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup",
  });
  const initHasRun = await pluginStore.get({ key: "initHasRun" });
  await pluginStore.set({ key: "initHasRun", value: true });
  return !initHasRun;
}

async function setPublicPermissions(newPermissions) {
  // Find the ID of the public role
  const publicRole = await strapi
    .query("plugin::users-permissions.role")
    .findOne({
      where: {
        type: "public",
      },
    });

  // Create the new permissions and link them to the public role
  const allPermissionsToCreate = [];
  Object.keys(newPermissions).map(controller => {
    const actions = newPermissions[controller];
    const permissionsToCreate = actions.map(action => {
      return strapi.query("plugin::users-permissions.permission").create({
        data: {
          action: `api::${controller}.${controller}.${action}`,
          role: publicRole.id,
        },
      });
    });
    allPermissionsToCreate.push(...permissionsToCreate);
  });
  await Promise.all(allPermissionsToCreate);
}

function getFileSizeInBytes(filePath) {
  const stats = fs.statSync(filePath);
  return stats["size"];
}

function getFileData(fileName) {
  const filePath = `./data/uploads/${fileName}`;

  // Parse the file metadata
  const size = getFileSizeInBytes(filePath);
  const ext = fileName.split(".").pop();
  const mimeType = mime.lookup(ext);

  return {
    path: filePath,
    name: fileName,
    size,
    type: mimeType,
  };
}

// Create an entry and attach files if there are any
async function createEntry({ model, entry, files }) {
  try {
    if (files) {
      for (const [key, file] of Object.entries(files)) {
        // Get file name without the extension
        const [fileName] = file.name.split('.');
        // Upload each individual file
        const uploadedFile = await strapi
          .plugin("upload")
          .service("upload")
          .upload({
            files: file,
            data: {
              fileInfo: {
                alternativeText: fileName,
                caption: fileName,
                name: fileName,
              },
            },
          });

        // Attach each file to its entry
        set(entry, key, uploadedFile[0].id);
      }
    }

    // Actually create the entry in Strapi
    const createdEntry = await strapi.entityService.create(
      `api::${model}.${model}`,
      {
        data: entry,
      }
    );
  } catch (e) {
    console.log("model", entry, e);
  }
}

async function importPages() {
  const files = {
    "seo.shareImage": getFileData("default-image.png"),
  };
  await createEntry({ model: "contact", entry: contact, files });
  await createEntry({ model: "faq", entry: faq, files });
  await createEntry({ model: "home", entry: home, files });
}

async function importGlobal() {
  const files = {
    favicon: getFileData("favicon.png"),
    "defaultSeo.shareImage": getFileData("default-image.png"),
  };
  return createEntry({ model: "global", entry: global, files });
}

async function importSeedData() {
  // Allow read of application content types
  await setPublicPermissions({
    global: ["find"],
    home: ["find"],
    contact: ["find"],
    faq: ["find"],
  });

  // Create all entries
  await importPages();
  await importGlobal();
}

module.exports = async () => {
  const shouldImportSeedData = await isFirstRun();

  if (shouldImportSeedData) {
    try {
      console.log("Setting up the template...");
      await importSeedData();
      console.log("Ready to go");
    } catch (error) {
      console.log("Could not import seed data");
      console.error(error);
    }
  }
};