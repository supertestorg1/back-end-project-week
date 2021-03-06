require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8000;

express()
  .use(cors())
  .use(express.json())
  .use('/api', require('./api'))
  .listen(port, () => console.log(`listening on port ${port}`));
