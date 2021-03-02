import * as xlsx from "xlsx";
import * as fs from "fs";
import * as path from "path";

import { randNum } from "./helpers/numbers";

const absPath = "D:/in_here/self_study/workbench/xoa/test_readingfiles.xlsx";
const checkBuild = "checking";

const readTestExcelFile = () => {
  const workBook = xlsx.readFile(absPath, undefined);
  const workSheet1 = workBook.Sheets[workBook.SheetNames[0]];
  return xlsx.utils.sheet_to_json(workSheet1, undefined);
};

console.log(readTestExcelFile());
