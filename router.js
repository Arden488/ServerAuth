const Auth = require('./controllers/auth');

module.exports = (app) => {
  app.get('/signup', Auth.signup);
}