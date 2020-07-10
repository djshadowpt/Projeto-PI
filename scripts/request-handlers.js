"use strict";
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
const options = require("../config/options.json");

function getMongoDbClient() {
    return new MongoClient(options.mongoDB.connectionString, {useUnifiedTopology: true});
}

/**
 * Função para retornar a lista de visitantes da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getVisitantes(req, res) {

    let client = getMongoDbClient();

    client.connect(function (err) {
        if (err) {
            res.json({"message": "error", "error": err });
        } else {
            let collection = client.db('ProjetoPI').collection("Visitante");
            collection.find({}, {_id:1, name:1, comentarios:1}).toArray(function(err, documents) {
                if (err) {
                    res.json({"message": "error", "error": err });
                } else {
                    res.json({"message": "success", "Visitante": documents });
                }
			client.close();
            });
        }
    });
}

module.exports.getVisitantes = getVisitantes;