# Blog Api #

A RestFull Api which have a resource named "post"

<b>Restful Routes</b>
* GET     api/v1/posts/
* GET     api/v1/posts/:id
* POST    api/v1/posts/
* PUT     api/v1/posts/:id
* DELETE  api/v1/posts/:id

<b>Extra Routes</b>
* DELETE  api/v1/posts/
* GET     api/v1/posts/searchByTitle


<b>Post Model</b>
Needs two fields
* title
* description

Uses <b>Mongo</b> DB

# Api Doc #
* npm run docs
* then visit "localhost:3000/apidoc"

# Tests #
* frisby package is used
* To execute tests run "jasmine-node crust/tests/"
