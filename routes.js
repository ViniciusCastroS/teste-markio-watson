const express = require("express");
const routes = express.Router();
const db = require("./database/controllers/controller");
const axios = require('axios')
require('dotenv').config()

const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const fs = require('fs');

routes.get('/', function(_, res) {

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


routes.post("/create/comment", function(req, res, next) {

    db.create(req, res);
    next();

}, function(req, _) {
    const commentText = req.body.title;
    const fileName = commentText.replace(/\s+/g, '_')
    const textToSpeech = new TextToSpeechV1({
        authenticator: new IamAuthenticator({
            apikey: process.env.PRIVATE_KEY,
        }),
        url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com',
    });
    const synthesizeParams = {
        text: commentText,
        accept: 'audio/wav',
        voice: 'pt-BR_IsabelaV3Voice',
    };

    textToSpeech.synthesize(synthesizeParams)
        .then(response => {
            return textToSpeech.repairWavHeaderStream(response.result);
        })
        .then(buffer => {
            fs.writeFileSync(`public/audio/${fileName}.wav`, buffer);
        })
        .catch(err => {
            console.log('error:', err);
        });
});

routes.get("/find/comments", db.findAll);

routes.get("/:id", db.findOne);

routes.put("/:id", db.update);

routes.delete("/:id", db.delete);

routes.delete("/delete/comments", db.deleteAll);

module.exports = routes;