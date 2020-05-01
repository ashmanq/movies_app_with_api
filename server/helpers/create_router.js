const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {

  const router = express.Router();

  router.get('/', function(req, res) {
    collection.find().toArray()
    .then(docs => res.json(docs))
    .catch((error) => {
      errorFunction(error, res);
    })
  });

  router.get('/:id', function(req, res) {
    const id = req.params.id;
    collection.findOne({_id: ObjectID(id)})
    .then(doc => res.json(doc))
    .catch((error) => {
      errorFunction(error, res);
    })
  });

  router.delete('/:id', function(req, res) {
    const id = req.params.id;
    collection.deleteOne({_id:ObjectID(id)})
    .then(doc => res.json(doc))
    .catch((error) => {
      errorFunction(error, res);
    })
  });

  return router;
};

const errorFunction = function(error, res) {
  console.error(error);
  res.status(500);
  res.json({error: error});
};

module.exports = createRouter;
