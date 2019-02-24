const DataRoutes = require('./dataRoutes');

module.exports = app => {
  app.use('/api/data/', DataRoutes);
};