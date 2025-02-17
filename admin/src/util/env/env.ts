import * as dotenv from 'dotenv'
import process from 'process';


export const getEnv = () => {
     if (`${process.env.ENV}`) {
        dotenv.config({
            override: true,
            path: `src/util/env/.env.${process.env.ENV}`
        })
       
    } else {
        console.error("NO ENV Defind.Please set the env test or prod to run in the package .json")
    }

    //console.log ("Env file path to pick is "+`src/util/env/.env.${process.env.ENV}`)

}