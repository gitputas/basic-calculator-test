// @ts-check
const { defineConfig, devices } = require('@playwright/test');

// build เป็น parameter: 1 project ต่อ 1 build ใช้ test ชุดเดียวกัน
const builds = ['Prototype', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 15_000,
  expect: { timeout: 3_000 },
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL: 'https://testsheepnz.github.io',
    // build ที่ element หายไป (เช่น Build 9) จะ fail ใน 3 วินาที ไม่ต้องรอ timeout เต็ม
    actionTimeout: 3_000,
    screenshot: 'only-on-failure',
  },

  projects: builds.map((build) => ({
    name: build === 'Prototype' ? 'prototype' : `build-${build}`,
    metadata: { build },
    use: { ...devices['Desktop Chrome'] },
  })),
});
