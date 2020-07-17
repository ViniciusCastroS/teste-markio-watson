const express = require("express");
const routes = express.Router();
const comments = require("./public/script");
const db = require("./database/controllers/controller");
const axios = require('axios')

routes.get('/', function(req, res) {

    let data = [];
    axios.get("http://localhost:8080/find/comments")
        .then(response => {
            response.data.forEach(element => {
                data.push(element);
            });
        }).then(response => {
            res.render('index', { item: data });
        });
});


routes.post("/create/comment", db.create);

routes.get("/find/comments", db.findAll);

routes.get("/:id", db.findOne);

routes.put("/:id", db.update);

routes.delete("/:id", db.delete);

routes.delete("/delete/comments", db.deleteAll);

module.exports = routes;