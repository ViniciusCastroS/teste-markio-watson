const express = require("express");
const routes = express.Router();
const comments = require("./mock");
const db = require("./database/controllers/controller");

routes.get('/', function(req, res) {
    return res.render('index', { item: comments });
});


routes.post("/create/comment", db.create);

routes.get("/find/comments", db.findAll);

routes.get("/:id", db.findOne);

routes.put("/:id", db.update);

routes.delete("/:id", db.delete);

routes.delete("/delete/comments", db.deleteAll);

module.exports = routes;