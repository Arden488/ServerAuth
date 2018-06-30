const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));

const port = process.env.PORT || 3090;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});