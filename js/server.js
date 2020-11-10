/* eslint-disable no-undef */
const express = require("express");
const path = require("path");

const app = express();


app.get("/",(req,res) =>{
    return res.sendFile(path.resolve(__dirname, "../public" , "index.html"));
});

app.get("*", function(req, res){
    res.status(404).send("NOT FOUND!");
  });

module.exports.start = (PORT = 3000) =>{
    app.listen(PORT, ()=> console.log("Server started on port " + PORT));
};
