"use strict";

var frisby = require("frisby");

// show
frisby.create("should get single post")
  .get("http://localhost:3000/api/v1/posts/key-1457343745352")
  .expectStatus(200)
  .expectJSON("results", {
    "title":"samsungs7","description":"nyc mobile","id":"key-1457343745352"
  })
.toss();

// index
frisby.create("should get all posts")
  .get("http://localhost:3000/api/v1/posts")
  .expectStatus(200)
  .expectJSONTypes("results.*", {title: String, description: String, id: String})
.toss();

// create
frisby.create("should create post")
  .post("http://localhost:3000/api/v1/posts?title=iphone&description=nycmobile")
  .expectStatus(200)
  .expectJSON({
       "meta":{
          "code":200
       },
       "results":{
          "ok":1,
          "nModified":0,
          "n":1,
          "upserted":[
             {
                "index":0
             }
          ]
       }
  })
.toss();

frisby.create("should give validation error if title is missing")
  .post("http://localhost:3000/api/v1/posts?description=nycmobile")
  .expectStatus(400)
  .expectJSON({
      "meta": {
        "code": "400",
        "message": [
          "title validation failed"
        ]
      }
  })
.toss();

frisby.create("should give validation error if description is missing")
  .post("http://localhost:3000/api/v1/posts?title=iphone")
  .expectStatus(400)
  .expectJSON({
      "meta": {
        "code": "400",
        "message": [
          "description validation failed"
        ]
      }
  })
.toss();

// delete
frisby.create("should not delete if wrong id is given")
  .delete("http://localhost:3000/api/v1/posts/key-invalid")
  .expectStatus(200)
  .expectJSON({
    "meta": {
      "code": 200
    },
    "results": {
      "ok": 1,
      "n": 0
    }
  })
.toss();

// searchByTitle
frisby.create("should search post by title")
  .get("http://localhost:3000/api/v1/posts/searchByTitle?title=x files1")
  .expectStatus(200)
  .expectJSON({
    "meta": {
      "code": 200
    },
    "results": [
      {
        "title": "x files1",
        "description": "season11 should also be launched",
        "id": "key-1457348530093"
      }
    ]
  })
.toss();
