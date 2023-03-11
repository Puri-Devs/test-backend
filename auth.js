const authRoutes = require('./api/frb');

const express = require('express')
const app = express();
const port = 80;


app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/api/example/get-token.html');
  });

app.listen(port, () => {
    console.log(`Firebase Server API on port: ${port}`)
})
