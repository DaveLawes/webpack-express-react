const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'));
});

const port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log('Express server listening on port', port);
})
