/* eslint-disable no-undef */
const path = require("path");
const readline = require("readline");

const fileReader = require("./js/fileReader");
const server = require("./js/server");
const systemReader = require("./js/systemReader");

const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const dirname = __dirname;
const fileURL = path.join(dirname,"package.json");

const options = ` Choose an option:
1. Read package.json
2. Display OS info
3. Start HTTP server
Type a number: `;

lineReader.question(options, (answer)=>{
    switch(answer){
        case "1":
            console.log("Reading package.json file:");
            fileReader.readFile(fileURL);
            break;
        case "2":
            console.log("Getting OS info...");
            systemReader.displayInfo();
            break;
        case "3":
            server.start();
            break;
        default:
            console.log("Invalid option! Please enter a number between 1-3!");
    }
    lineReader.close();
});
