"use strict";

var model = require("./db").db.extend({
   tableName: "posts"
});

// overriding base method
model.prototype.getDBObject = function getDBObject(object) {    // prepare mongo specific object from company given object
   return {
       // _id:object.id,
       id:object.post_id,
       title:object.title,
       description:object.description
   };
};

model.prototype.getObjectFromDBObject = function getObjectFromDBObject(mongoObject) {
   // return company specific object from mongo object
   mongoObject.id = mongoObject._id;
   delete mongoObject._id;
   return mongoObject;
};

module.exports = model;
///schema using storeHouse
