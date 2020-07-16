const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");


const routes = require('./routes');
const db = require("./database/models");

db.sequelize.sync();

const server = express();

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(routes);
server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, function() {
    console.log("server running");
})