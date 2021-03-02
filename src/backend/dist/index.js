"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var xlsx = __importStar(require("xlsx"));
var absPath = "D:/in_here/self_study/workbench/xoa/test_readingfiles.xlsx";
var checkBuild = "checking";
var readTestExcelFile = function () {
    var workBook = xlsx.readFile(absPath, undefined);
    var workSheet1 = workBook.Sheets[workBook.SheetNames[0]];
    return xlsx.utils.sheet_to_json(workSheet1, undefined);
};
console.log(readTestExcelFile());
//# sourceMappingURL=index.js.map