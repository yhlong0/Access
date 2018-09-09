const config = {};

config.mongoURI = {
  development: 'mongodb://localhost:27017/access',
  test: 'mongodb://localhost:27017/access-test',
};

module.exports = config;
