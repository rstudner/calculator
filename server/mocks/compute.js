module.exports = function(app) {
  var express = require('express');
  var computeRouter = express.Router();

  computeRouter.get('/', function(req, res) {
    res.send({
      "compute": []
    });
  });

  computeRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  computeRouter.get('/:id', function(req, res) {
    res.send({
      "compute": {
        "id": req.params.id
      }
    });
  });

  computeRouter.put('/:id', function(req, res) {
    res.send({
      "compute": {
        "id": req.params.id
      }
    });
  });

  computeRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/compute', computeRouter);
};
