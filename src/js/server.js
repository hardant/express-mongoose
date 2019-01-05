const express = require('express');
const PORT = require('./config/const').PORT;
const dbClient = require('./dbClient');

const userRouter = require('./routers/user.router');

const app = express();

app.use('/users', userRouter);

app.get('/hello', function(req, res) {
  res.send('Hello');
});

dbClient.connnect().then(() => {
  app.listen(PORT, () => {
    console.log(`server started on port:  ${PORT}`); 
  });
});