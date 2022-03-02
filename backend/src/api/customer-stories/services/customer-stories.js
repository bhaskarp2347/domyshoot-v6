'use strict';

/**
 * customer-stories service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-stories.customer-stories');
