# Customer Care App Test Automation Framework

## Playwright(TypeScript) and Cucumber

- Playwright is a Node. js library that lets you script and automates test cases.This cross-browser automation is reliable and fast.

- Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team.


## Automation Framework Features:-
- Support of Page Object Model for better maintenance and code reusablity.
- Execute test cases on multiple environments.
- Generate Test summary reports and logs.
- Report capures screenshots and videos for failed test cases
- Support of test cases execution based on defind tags, like @smoke or @regression


## Funtionality Covered for Smoke Testing
-  Login 
-  Search
-  Purchase Subscription


## Funtionality Covered for Regression Testing
-  Login 
-  Purchase Subscription 
-  Add Customer
-  Cancellation 
-  Purchase Renew/Guft 
-  Donation
-  Give Free Extenstion 
-  Enroll AutoRenew 
-  Past Guft  Recepients
-  Did not Recieve Product
-  Suspend While Away

## Project Structure
- src -> Contains all the util and env files
- test-results -> Contains all the reports related file and Logs
- test>features>CustomerCare>feature ->Contains all the feature files.
- test>features>CustomerCare>stepDefinations ->Contains all the stepDefinations files.
- test>features>CustomerCare>support ->Contains the hook file.
- test>pages ->Contains the page objects and related methods.
- report.ts ->the file at project root contains the reporting information.
- tsconfig.json ->The tsconfig.json file specifies the compiler options required to compile the project.
- cucumber.js -> This file is basically a Cucumber Runner class. This .js file will be used to:-
    - define/execute the feature files and step definitions
    - define reporting format
    - define parllel behavior
    - defind retry logic
- package.json:The "scripts" property of the package.json file is used to define the different scripts.
```sh
 "scripts": {
    "regresstiontest": "cross-env ENV=test FORCE_COLOR=0 npx cucumber-js || true",
    "smoketest": "cross-env ENV=test FORCE_COLOR=0 npx cucumber-js --tags '@smoke' || true",
    "prodtest": "cross-env ENV=prod FORCE_COLOR=0 npx cucumber-js || true",
    "postresult": "npx  ts-node ./report.ts",
    "qatest-failed": "cross-env ENV=test npx cucumber-js -p rerun  @rerun.txt",
    "prodtest-failed": "cross-env ENV=prod npx cucumber-js -p rerun  @rerun.txt"
  }
  ```

## Installation

Test Automation Framework uses [Node.js](https://nodejs.org/) v18+ to run.

- Clone the project from the  github 

- To download all the dependencies used run below command at project root
```sh
cd <the path of the project folder>
npm install
```
- To download the playwright supported browsers run below command 
```sh
cd <the path of the project folder>
npx playwright install
```
or One can also install specific browsers by providing an argument:
```sh
npx playwright install webkit
```
- Install cucumber plugin in the vscode
- Press Ctrl+, to open and update the Settings 
- In Search textbox and type cucumber
- In returned result , in the right pane Click on "Edit in setting.json" button
- Then under the  "cucumber.features" section specify the relative path of feature files , for example as shown below
```sh
    "cucumber.features": [        
     "test/features/**/feature/*.feature",
     ]
```
 Similarly,under the "cucumber.glue" section provide the relative path for StepDefinations files, for example as shown below
```sh
"cucumber.glue": [
  "test/features/**/stepDefinitions/*.ts",
 ]
 ```
- Also update following section within the cucumber.js file

```sh
	paths: [
          "test/features/**/feature/*.feature"
      ],	  
	  require: [
        "test/features/CustomerCare/stepDefinitions/*.ts",
        "test/features/CustomerCare/support/hook.ts"
      ],
```	  

To run the Smoke tests in QA/test env type below command: 
```sh
cd <the path of the project folder>
npm run smoketest
```

To run the Regression tests in QA/test env type below command: 
```sh
cd <the path of the project folder>
npm run regresstiontest
```

To run the smoke test scripts in prod env type below command: 
```sh
cd <the path of the project folder>
npm run prodtest
```

To generate the Test Summary Report after the successful test case execution of above command , then type below command: 
```sh
cd <the path of the project folder>
npm run postresult
```

To run only the failed testcases type below command in QA/Test env: 
```sh
cd <the path of the project folder>
npm run qatest-failed
```

To run only the failed testcases type below command in prod env: 
```sh
cd <the path of the project folder>
npm run prodtest-failed
```

## Using the follwoing Dependencies.

```sh
cd <the path of project folder>
npm i @cucumber/cucumber -D
npm i @playwright/test  -D
npm i @types/node  -D
npm i @faker-js/faker -D
npm i ts-node  -D
npm i winston -D
npm i cross-env -D
npm i dotenv -D
npm i multiple-cucumber-html-reporter -D
```

# Parallel Execution 
Update the property parallel in cucumber.js from 1 to 2 or to the number of workers needed to be run for the parllel exuectution 
- Example   `parallel:2 ` - will start 2 workers in parallel 


## Steps to see the traces from  the report once it gets generated successfully:-
- Download the  trace file available in the workspace against the running/current build
 https://jenkins.darwin.cx/job/DCX%20QA/job/main/${SEPECIFY_CURRENT_BUILDNUMBER}/execution/node/3/ws/dcx-client-app/test_results/trace/
![alt text](image.png)
- open trace.playwright.dev
- Select the download  tracefile
- Select the failed step , one can see the Network calls for those failed step under the Network Tab in lower pane.