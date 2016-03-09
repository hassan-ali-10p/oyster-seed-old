"use strict";

var config = require("../constants/db");
// models will contain data dependent classes
var db = global.Packages.Oyster.Model.initialize(config.mysql);

function generateKey(){
  return String("key-" + new Date().getTime());
}

module.exports.db = db;
module.exports.generateKey = generateKey;
