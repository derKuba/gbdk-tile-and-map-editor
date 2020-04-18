import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {

  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,

    }
  ],
  testing: {
    verbose: false,
    browserArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
    coverageReporters: ["json", "text", "html"],
    coverageDirectory: "reports/coverage",
    coverageThreshold: {
      global: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90
      }
    },
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "/src/provider/",
    ]
  }
};
