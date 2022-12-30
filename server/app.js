const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv').config({ path: './config/config.env' });
const helmet = require('helmet');
const morgan = require('morgan');
const { clientRoute } = require('./routes/clientRoute');
const { generalRoute } = require('./routes/generalRoute');
const { managementRoute } = require('./routes/managementRoute');
const { salesRoute } = require('./routes/salesRoute');
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/client', clientRoute);
app.use('/general', generalRoute);
app.use('/managementRoute', managementRoute);
app.use('/sales', salesRoute);

app.listen(process.env.PORT, () => {
  console.log('Server Started On :', process.env.PORT);
  connectDB();
});
