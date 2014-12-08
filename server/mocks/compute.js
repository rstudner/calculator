module.exports = function(app) {
  var express = require('express');
  var computeRouter = express.Router();

  computeRouter.get('/', function(req, res) {
    res.send({
      "compute": []
    });
  });

  computeRouter.post('/', function(req, res) {
    var operation = req.body.operation;
    var arg1 = parseFloat(req.body.args[0]);
    var arg2 = parseFloat(req.body.args[1]);

    var result = 0;
    switch (operation) {
      case '+':
        result = arg1 + arg2;
        break;
      case '-':
        result = arg1 - arg2;
        break;
      case '*':
        result = arg1 * arg2;
        break;
      case '/':
        result = arg1 / arg2;
        break;

    }
    res.status(200).send({
      "result" : result
    });
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
