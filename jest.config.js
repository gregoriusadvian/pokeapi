module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
    testTimeout: 30000,
    verbose: false,
    setupFiles: ["custom-env"],
    reporters: [
      "default",
      [
        "jest-html-reporters",
        {
          pageTitle: "API Automation Report",
          expand: true,
          publicPath: "./reports",
          filename: "jest-report.html",
          includeConsoleLog: true,
        },
      ],
    ],
  };