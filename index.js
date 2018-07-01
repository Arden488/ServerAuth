const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('./router');

app.use(morgan('combined'));

router(app);

const port = process.env.PORT || 3090;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});