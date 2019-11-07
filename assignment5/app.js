const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var path = require('path');
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/submit', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send(
    new Buffer(
      `<html> 
    name: ${req.body.name}</br>
    email: ${req.body.email}</br>
    comment: ${req.body.message}</br>
    </html>`
    )
  );
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
