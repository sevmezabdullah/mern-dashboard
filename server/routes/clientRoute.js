const express = require('express');

const clientRoute = express.Router();

clientRoute.get('/', (request, response) => {
  return response.json({ message: 'success' });
});

module.exports = {
  clientRoute,
};
