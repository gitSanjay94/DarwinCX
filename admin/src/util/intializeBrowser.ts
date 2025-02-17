import { chromium, LaunchOptions, firefox, webkit } from 'playwright/test'
import process from 'process';

let headless: boolean = true

// const options: LaunchOptions = {   
//     headless: headless
// }
export const invokeBrowser = () => {
    const headlessString = process.env.HEAD || 'true'; // Ensure it's a string or empty string if undefined
    headless = typeof headlessString === 'string' ? headlessString === 'true' : false; // Assign value to headless
    const browserType = process.env.BROWSER || "chrome";
    
        switch (browserType) {
        
        case "chrome":
            return chromium.launch({ headless: headless});
                   case "msedge":
            return chromium.launch({ headless: headless,channel:'msedge' });
        case "firefox":
            return firefox.launch({ headless: headless});
        case "webkit":
            return webkit.launch({ headless: headless });
        
        default:
            throw new Error("Invalid Browser");
    }

}

