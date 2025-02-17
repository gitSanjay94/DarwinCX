module.exports = {
  default: {
      tags: process.env.npm_config_TAGS || "",
      formatOptions: {
          snippetInterface: "async-await"
      },
      paths: [
          "test/features/**/feature/*.feature"
      ],
      publishQuiet: true,
      dryRun: false,
      require: [
        "test/features/CustomerCare/stepDefinitions/*.ts",
        "test/features/CustomerCare/support/hook.ts"
      ],
      requireModule: [
          "ts-node/register"
      ],
      format: [
          "progress-bar",         
          "html:test_results/cucumber-report.html",
          "json:test_results/cucumber-report.json",
          "rerun:@rerun.txt"
      ],
      parallel: 1
  },
  rerun: {
      formatOptions: {
          snippetInterface: "async-await"
      },
      publishQuiet: true,
      dryRun: false,
      require: [
        "test/features/CustomerCare/stepDefinitions/*.ts",
        "test/features/CustomerCare/support/hook.ts"
      ],
      requireModule: [
          "ts-node/register"
      ],
      format: [
          "progress-bar",
          "html:test_results/cucumber-report.html",
          "json:test_results/cucumber-report.json",
          "rerun:@rerun.txt"
      ],
      parallel: 1
  }
}