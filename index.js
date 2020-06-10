require('dotenv').config();

const express = require('express');
const CubejsServerCore = require('@cubejs-backend/server-core');

const app = express();
app.use(require('cors')());

const serverCore = CubejsServerCore.create({ apiSecret: process.env.CUBEJS_API_SECRET });
serverCore.initApp(app);

const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  if (err) {
    console.error('Fatal error during server start: ');
    console.error(e.stack || e);
  }
  console.log(`🚀 Cube.js server (${CubejsServerCore.version()}) is listening on ${port}`);
});
