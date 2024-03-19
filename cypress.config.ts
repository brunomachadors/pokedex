import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'br1ckg',
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    retries: 3,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 20000,
});
