const express = require('express');
const port = 4000;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "life.html"));
});

console.log(`${__dirname}`);
app.listen(port,()=>{console.log('life game')});
