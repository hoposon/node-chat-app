const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

// console.log(__dirname + '/../public');
// above prints out /home/lukas/Data-c/Operations/programovani/NodeJS/node-chat-app/server/../public
// console.log(publicPath);
// above prints out /home/lukas/Data-c/Operations/programovani/NodeJS/node-chat-app/public

var app = express();

// static middleware
app.use(express.static(publicPath));



app.listen(port,() => {
    console.log(`listening on port ${port}`);
});