// playwright.config.js
// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30000,
  use: {
    baseURL: 'https://petstore.swagger.io/v2',
  },
  reporter: [['list'], ['html']],
});