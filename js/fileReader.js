const fs = require("fs");

module.exports.readFile = (filePath) => {
    console.log(filePath);
    fs.readFile(filePath, "utf-8", (error, content) => {
        if (!error) {
            console.log(content);
        }
    });
};