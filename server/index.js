// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const body_parser = require('body-parser');
  const router = require('./router');
  const port = 3000;

  const server = express();

  server.use(body_parser.json());
  server.use(body_parser.urlencoded({ extended: true }));

  server.use('/', express.static(path.join(__dirname + '/../client/dist')));


  server.get('/name', (req, res) => {
    res.status(200).send('This is your get request, modify this file to use your router!')
  })

  server.post('/name', (req, res) => {
    res.status(200).send('This is your post request, modify this file to use your router!')
  })

  server.put('/name', (req, res) => {
    res.status(200).send('This is your put request, modify this file to use your router!')
  })

  server.delete('/name', (req, res) => {
    res.status(200).send('This is your delete request, modify this file to use your router!')
  })

  server.listen(port, () => console.log('Connected to port: 3000'))