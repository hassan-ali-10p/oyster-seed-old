"use strict";

// var Promise = global.Packages.Promise,
//     _ = global.Packages.lodash,
var Rules = global.Packages.Oyster.Helpers.rules,
    ValidationHelper = global.Packages.Oyster.Helpers.validation;

var PostFacade = global.Packages.Oyster.BaseFacade.extend();
var PostModel = require("../models/posts");
var generateKey = require("../models/db").generateKey;

PostFacade.prototype.index = function index() {
  return new PostModel().find();
};

PostFacade.prototype.show = function show(inputObject) {
  return new PostModel({ id: inputObject.id }).fetch();
};

PostFacade.prototype.create = function create(inputObject) {
  var rules = new Rules();
  rules.addMulti([
    {
      title: {
          required: true
      }
    },
    {
      description: {
          required: true
      }
    }
  ]);
  return ValidationHelper.validate(inputObject, rules).then(function(){
      inputObject.id = generateKey();
      return new PostModel(inputObject).save();
  });
};

PostFacade.prototype.update = function update(inputObject) {
  var rules = new Rules();
  rules.addMulti([
    {
      title: {
          required: true
      }
    },
    {
      description: {
          required: true
      }
    }
  ]);
  return ValidationHelper.validate(inputObject, rules).then(function(){
    return new PostModel().update({id: inputObject.id},inputObject);
  });
};

PostFacade.prototype.remove = function remove(inputObject) {
  return new PostModel({id: inputObject.id}).deleteObject();
};



PostFacade.prototype.removeAll = function removeAll() {
  return new PostModel().deleteAll();
};

PostFacade.prototype.searchByTitle = function searchByTitle(inputObject) {
  var rules = new Rules();
  rules.addMulti([
    {
      title: {
          required: true
      }
    }
  ]);

  return ValidationHelper.validate(inputObject, rules).then(function(){
    return new PostModel().find({title: inputObject.title});
  });
};

module.exports = PostFacade;
