"use strict";

module.exports = {
  mongo: {
    client : "mongo",
    host: "localhost",
    port: "27017",
    db: "blogdb"
  },
  mysql: {
    client: "mysql",
    host: "localhost",
    port: "3306",
    db: "oyster_seed_old_dev",
    uid: process.env.DEVELOPMENT_USERNAME,
    pwd: process.env.DEVELOPMENT_PASSWORD
  }
};
