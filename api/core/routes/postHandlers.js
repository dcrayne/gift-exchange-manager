var cors = require('cors');

module.exports = function(server, restify) {

  // response header settings
  server.use(function crossOrigin(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "*");
//                  "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    return next();
  });

  // enable access to request data in req.params
  server.use(restify.plugins.bodyParser( { mapParams : true } ));

  server.use(cors());
//  server.use(restify.plugins.fullResponse());
//  console.log(restify.plugins.CORS);
}
