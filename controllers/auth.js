const User = require('../models/user');

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'Email and password are both required' });
  }

  User.findOne({ email }, (err, exUser) => {
    if (exUser) {
      return res.status(422).send({ error: 'User with this email is already registered '});
    }

    const user = new User({
      email,
      password
    });

    user.save(err => {
      if (err) return next(err);

      res.json({ success: true });
    });
  });
}
