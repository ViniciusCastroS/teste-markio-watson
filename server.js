const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const mysql = require("mysql2")

const routes = require('./routes');
const db = require("./database/models");

db.sequelize.sync();

let mysqlCon = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD
});

mysqlCon.connect(function(err) {

    mysqlCon.query('SHOW DATABASES LIKE testdb',
        function(err) {
            if (err) {
                mysqlCon.query(
                    'CREATE DATABASE testdb',
                    function(err) {
                        if (!err) {
                            db.sequelize.sync().then(() => {
                                console.log('Database connected successfully!');
                            }).catch((err) => {
                                console.log(err, 'Something went wrong with the Database!');
                            });

                        }
                    });
            }
        });
    if (err) {
        console.log(err.message);

    } else {
        console.log('Connected!');
    }
});

const server = express();

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: false }));
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