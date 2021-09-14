import fs from "fs";
import { checkTag } from "./tag-checker";

const filePath = process.argv[2];
if (!filePath) {
    console.log("No input file path, please use: npm run start <file path>");
} else {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(`Error: ${err.message}`);
        }
        console.log(checkTag(data));
    });
}
