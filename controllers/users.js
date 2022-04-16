const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const User = require('../models/user');

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => next(err));
};

module.exports.getUserById = (req, res, next) => {
  User.findById({ _id: req.params.userId })
    .orFail(() => { throw new NotFoundError('Пользователь по указанному _id не найден.'); })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Передан некорректный _id пользователя');
      } else {
        next(err);
      }
    })
    .catch((err) => next(err));
};

module.exports.createUser = (req, res, next) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные при создании пользователя.');
      } else {
        next(err);
      }
    })
    .catch((err) => next(err));
};

module.exports.updateProfile = (req, res, next) => {
  const { name, about } = req.body;
  const profileId = req.user._id;

  User.findByIdAndUpdate(profileId, { name, about }, { new: true, runValidators: true })
    .orFail(() => { throw new NotFoundError('Пользователь по указанному _id не найден.'); })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные при обновлении профиля.');
      } else {
        next(err);
      }
    })
    .catch((err) => next(err));
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  const profileId = req.user._id;

  User.findByIdAndUpdate(profileId, { avatar }, { new: true, runValidators: true })
    .orFail(() => { throw new NotFoundError('Пользователь по указанному _id не найден.'); })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные при обновлении аватара');
      } else {
        next(err);
      }
    })
    .catch((err) => next(err));
};
