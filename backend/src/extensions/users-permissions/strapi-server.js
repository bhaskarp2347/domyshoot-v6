module.exports = (plugin) => {
  plugin.controllers.user.sendContactEmail = async (ctx) => {
    const {defaultTo} = strapi.plugin('email').config('settings')
    const {name, email, subject, message, attachment} = ctx.request.body;
    await strapi
      .plugin('email')
      .service('email')
      .send({
        to: defaultTo,
        subject: 'New inquiry from visitor | DoMyShoot',
        html: `
        <table>
          <tr><th>Name</th><th>${name}</th></tr>
          <tr><th>Email</th><th>${email}</th></tr>
          <tr><th>Subject</th><th>${subject}</th></tr>
          <tr><th>Message</th><th>${message}</th></tr>
          <tr><th>Attachment</th><th>${attachment}</th></tr>
        </table>
        `,
      });

    return {
      success: true,
      message: "Your query has been submitted! We will be contacting you soon."
    }
  }

  plugin.routes['content-api'].routes.push({
    method: "POST",
    path: '/user/contact-form-submit',
    handler: 'user.sendContactEmail',
    config: {
      prefix: "",
      policies: [],
      middlewares: [],
    }
  })

  return plugin;
};

