const report = require("multiple-cucumber-html-reporter");
let  currentDateTime = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'});
report.generate({
  jsonDir: "test_results",
  reportPath: "test_results/",
  reportName:"Darwin CX Customer Care Application Report",
  pageTitle:"Playwright Automation Report",
  displayDuration:true,  
  metadata: {   
    device: "Laptop",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project1", value: "Darwin CX Project" },
      { label: "Release1", value: "QA Test Release" },
      { label: "Cycle1", value: "Smoke Test" }      ,
      { label: "Execution DateTime", value:currentDateTime}
      
    ],
  },
});

