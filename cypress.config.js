const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  watchForFilesChanges: false,
  chromeWebSecurity: false,
  waitForAnimation: true,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 60000,
  video: true,
  screenshotsFolder: 'cypress/videos',
  failOnStatusCode: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    html: true,
    overwrite: false,
    json: false,
    charts: true,
    reportPageTitle: 'Shopist.io Report',
    embeddedScreenshots: true,
  },
  retries: {
    runMode: 1,
    openMode: 4,
  },
  projectId: 'dhyf96',
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://www.shopist.io',
    specPattern: './**/*.{js,jsx,ts,tsx}',
  },

  
})
