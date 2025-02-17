import winston, { format } from "winston"
import { logger } from "../../../test/features/CustomerCare/support/hook"

export function logOptions(scenarioName:string){
    return{
       transports: [
            new winston.transports.File({
                filename: `test_results/logs/${scenarioName}.log`,
                options: { flags: 'w' }, //overwrite the existing file
                level: 'info' ,
                format: format.combine(
                    format.label({ label: 'Winston Logger Label ' }),
                    format.timestamp({format:'MM-DD-YY HH:mm:ss'}),
                    format.prettyPrint(),
                    format.printf(info=>`${info.level}:${[info.timestamp]} ${info.message}`)
                  )

            }),
            
        ]
    }

}