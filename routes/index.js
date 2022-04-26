const router = require('express').Router();
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');

const usersRouter = require('./users');
const cardsRouter = require('./cards');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', login);
router.post('/signup', createUser);

router.use('/users', auth, usersRouter);
router.use('/cards', auth, cardsRouter);

router.use(() => { throw new NotFoundError('Ресурс по указанному адресу не найден'); });

module.exports = router;
