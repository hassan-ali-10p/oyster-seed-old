"use strict";

var frisby = require("frisby");

frisby.create("hello test")
  .get("http://localhost:3000/api/v1/posts/key-1457343745352")
  .expectStatus(200)
  .expectJSON({
    "meta":{"code":200},"results":{"title":"samsungs7","description":"nyc mobile","id":"key-1457343745352"}
  })
.toss();

frisby.create("hello test 1")
  .get("http://localhost:3000/api/v1/posts/key-1457343745352")
  .expectStatus(200)
  .expectJSON("results", {
    "title":"samsungs7","description":"nyc mobile","id":"key-1457343745352"
  })
.toss();

frisby.create("hello test 2")
  .get("http://localhost:3000/api/v1/posts")
  .expectStatus(200)
  .expectJSONTypes("results.*", {title: String, description: String, id: String})

.toss();

