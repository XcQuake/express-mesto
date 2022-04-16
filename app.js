const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middlewares/errorHandler');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const NotFoundError = require('./errors/NotFoundError');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: '625a90715eb1ce238fe15e92',
  };

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use(() => { throw new NotFoundError('Ресурс по указанному адресу не найден'); });

app.use(errorHandler);

app.listen(PORT, () => {});
