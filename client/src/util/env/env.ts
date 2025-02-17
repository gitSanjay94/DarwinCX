import * as dotenv from 'dotenv';
import process from 'process';

export const getEnv = (urlToCall: string | undefined) => {
    if (process.env.ENV) {
        dotenv.config({
            override: true,
            path: `src/util/env/.env.${process.env.ENV}`
        });
        
        if (urlToCall) {
            process.env.BASEURL = urlToCall;
        }
    } else {
        console.error("NO ENV Defined. Please set the env test or prod to run in the package.json");
    }
}
