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
    var errorText = null;

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
        if (arg2 === 0) { // oh no you didn't!
          errorText = 'That whole divide by zero thing isnt cool.';
        } else {
          result = arg1 / arg2;
        }
        break;

    }
    if (errorText === null) {
      res.status(200).send({
        'result' : result
      });
    } else {
      res.status(500).send({
        'errorText': errorText
      });
    }

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
