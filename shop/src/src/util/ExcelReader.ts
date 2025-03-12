import { logger } from "../../test/features/CustomerCare/support/hook";

const _ = require("lodash");
var XLSX = require("xlsx");
const fs = require('fs');
export async function getExcelData(filename: string, sheetName: string) {
    let fileExists = fs.existsSync(filename);
    console.log("file exists:", fileExists);
    let actual;
    if (fileExists) {
        const workbook = XLSX.readFile(filename)
        let ws = workbook.Sheets[sheetName];
        actual = XLSX.utils.sheet_to_json(ws)
        logger.info("actual Json Object length ******   ", actual.length)
        logger.info("actual Json Object ******   ", actual)
    }
    return actual;
}

export async function jsonComparison(expedtedJsonObj: any, actualJsonObj: any) {
    logger.info("Original Data   ******   ", await actualJsonObj)
    logger.info("client_id", await actualJsonObj[0].client_id)
    for (let ele in actualJsonObj) {
        delete actualJsonObj[ele].expiry_date
    }
    logger.info("Final Data   ******   ", actualJsonObj)
    logger.info("loadash", _.isEqual(actualJsonObj, expedtedJsonObj))
}