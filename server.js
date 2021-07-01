  
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3001;
const app = express();

const sequelize = require("./config/connection");


