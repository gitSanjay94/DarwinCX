const report = require("multiple-cucumber-html-reporter");
let  currentDateTime = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'});
report.generate({
  jsonDir: "test_results",
  reportPath: "test_results/",
  reportName:"Darwin CX Customer Care Application Report",
  pageTitle:"Playwright Automation Report",
  displayDuration:true,  
  customStyles: {
    logo: "C:/Users/Admin/OneDrive - acmeminds.com/Automation/dcx-qa-automation/dcx-client-app/test_results/image.png", 
    mainColor: "#444444",
    secondaryColor: "#888888",
  },
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
      { label: "Project", value: "Darwin CX Project" },
      { label: "Release", value: "QA Test Release" },
      { label: "Cycle", value: "Smoke Test" }      ,
      { label: "Execution DateTime", value:currentDateTime},
      { label: "Environment", value: "Dev" },
      { label: "Browser", value: "Chrome" },
      { label: "Tester", value: "JP Kaul" }
      
    ],
  },
});

