const { defineConfig, devices } = require('@playwright/test');

// The build is a parameter: one project per build, all running the same test.
const builds = ['Prototype', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 15_000,
  expect: { timeout: 3_000 },
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL: 'https://testsheepnz.github.io',
    // A missing element (as in Build 9) fails after 3 seconds instead of waiting for the full test timeout.
    actionTimeout: 3_000,
    screenshot: 'only-on-failure',
  },

  projects: builds.map((build) => ({
    name: build === 'Prototype' ? 'prototype' : `build-${build}`,
    metadata: { build },
    use: { ...devices['Desktop Chrome'] },
  })),
});
