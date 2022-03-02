'use strict';

/**
 * learn service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learn.learn');
