require("dotenv").config();
const express = require('express');
const app = express();
let responseHandler = require('./middleware/responsehandler')
app.use(express.json());
const cors = require('cors')
const sequelize = require('./database');
 app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/',require('./router/route'));
app.use(responseHandler.onError);
app.listen(process.env.APP_PORT, () => {
  console.log("Server running on PORT : ",process.env.APP_PORT);
});
// sequelize.sync({force:true})