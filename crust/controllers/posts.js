"use strict";
 
 var PostFacade = require("../../lib/facade/posts");

/**
* @api {get} /posts Request All Posts
* @apiName GetAllPost
* @apiGroup Post
*
* @apiSuccess {Object[]} results              Array containing all the posts.
* @apiSuccess {String} results.title          Title of the Post.
* @apiSuccess {String} results.description    Description of the Post.
* @apiSuccess {String} results.id             Unique Id assigned to the Post.
*
* @apiSuccessExample {json} Success-Response:
*  {
*    meta: {
*      code: 200
*    },
*    results: [
*      {
*        title: "MontBlank",
*        description: "nycWatch",
*        id: "key-1457086041786"
*      },
*      {
*        title: "samsungs6",
*        description: "nyc mobile",
*        id: "key-1457329231152"
*      }
*    ]
*  }
*
* @apiSuccessExample {json} Success-Response:
*  {
*    meta: {
*      code: 200
*    },
*    results: []
*  }
*/

function index(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.index().then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  });
}

/**
* @api {get} /posts/:id Request Single Post
* @apiName GetPost
* @apiGroup Post
*
* @apiParam {Number} id Posts unique ID.
*
* @apiSuccess {Object} results        Post data.
* @apiSuccess {String} title          Title of the Post.
* @apiSuccess {String} description    Description of the Post.
* @apiSuccess {String} id             Unique Id assigned to the Post.
*
* @apiSuccessExample {json} Success-Response:
*   {
*     meta: {
*       code: 200
*     },
*     results: {
*       title: "samsungs7",
*       description: "nyc mobile",
*       id: "key-1457329317784"
*     }
*   }
*
* @apiSuccessExample {json} Success-Response:
*  {
*    meta: {
*    code: 200
*    },
*    results: null
*  }
*/
function show(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.show(req.getInputObject()).then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  });
}

/**
* @api {post} /posts Create A Post
* @apiName CreatePost
* @apiGroup Post
*
* @apiParam {String} title          Title of the Post.
* @apiParam {String} description    Description of the Post.
* @apiParamExample {json} Request-Example:
*  {
*    "title": "iphone",
*    "description": "Great mobile"  
*  }
*
*  @apiSuccess {Object} results                Information regarding data level changes.
*  @apiSuccess {String} results.ok             Boolean to show if post created successfully.
*  @apiSuccess {String} results.nModified      number of records that are modified.
*  @apiSuccess {String} results.n              number of records affected(created).
*
*  @apiSuccessExample {json} Success-Response:
*  {
*    "meta": {
*      "code": 200
*    },
*    "results": {
*      "ok": 1,
*      "nModified": 0,
*      "n": 1
*    }
*  }
*
*  @apiError titleValidationFailed          title is not provided.
*  @apiError descriptionValidationFailed    description is not provided.
*  @apiErrorExample {json} Error-Response:
*    {
*      "meta": {
*        "code": "400",
*        "message": [
*          "title validation failed"
*        ]
*      }
*    }
*/
function create(req, res, next){
  var postFacade = new PostFacade(req);
  
  req.getInputObject();
  postFacade.create(req.getInputObject()).then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  });
}

/**
* @api {delete} /posts/:id Delete A Post
* @apiName DeletePost
* @apiGroup Post
*
* @apiParam {Number} id Posts unique ID.
*
*  @apiSuccess {Object} results                Information regarding data level changes.
*  @apiSuccess {String} results.ok             Boolean to show if post deleted successfully.
*  @apiSuccess {String} results.n              number of records affected(deleted).
*
*  @apiSuccessExample {json} Success-Response:
*  {
*    "meta": {
*      "code": 200
*    },
*    "results": {
*      "ok": 1,
*      "n": 1
*    }
*  }
*/
function remove(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.remove(req.getInputObject()).then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  });
}

/**
* @api {put} /posts/:id Update A Post
* @apiName DeletePost
* @apiGroup Post
*
* @apiParam {Number} id             Posts unique ID.
* @apiParam {String} title          Title of the Post.
* @apiParam {String} description    Description of the Post.
* @apiParamExample {json} Request-Example:
*  {
*    "title": "iphone6",
*    "description": "Great mobile"  
*  }
*
*  @apiSuccess {Object} results                Information regarding data level changes.
*  @apiSuccess {String} results.ok             Boolean to show if post updated successfully.
*  @apiSuccess {String} results.nModified      number of records that are modified.
*  @apiSuccess {String} results.n              number of records affected(updated).
*
*  @apiSuccessExample {json} Success-Response:
*  {
*    "meta": {
*      "code": 200
*    },
*    "results": {
*      "ok": 1,
*      "nModified": 1,
*      "n": 1
*    }
*  }
*
*  @apiError titleValidationFailed          title is not provided.
*  @apiError descriptionValidationFailed    description is not provided.
*  @apiErrorExample {json} Error-Response:
*    {
*      "meta": {
*        "code": "400",
*        "message": [
*          "title validation failed"
*        ]
*      }
*    }
*/
function update(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.update(req.getInputObject()).then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  }); 
}


/**
* @api {delete} /posts Delete All Post
* @apiName DeleteAllPost
* @apiGroup Post
*
*  @apiSuccess {Object} results                Information regarding data level changes.
*  @apiSuccess {String} results.ok             Boolean to show if post deleted successfully.
*  @apiSuccess {String} results.n              number of records affected(deleted).
*
*  @apiSuccessExample {json} Success-Response:
*  {
*    "meta": {
*      "code": 200
*    },
*    "results": {
*      "ok": 1,
*      "n": 2
*    }
*  }
*/
function removeAll(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.removeAll().then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  }); 
}

/**
* @api {get} /posts/searchByTitle Searches Post by title
* @apiName SearchPostsByTitle
* @apiGroup Post
*
* @apiParam {String} title          Title of the Post.
* 
* @apiSuccess {Object[]} results              Array containing all the posts.
* @apiSuccess {String} results.title          Title of the Post.
* @apiSuccess {String} results.description    Description of the Post.
* @apiSuccess {String} results.id             Unique Id assigned to the Post.
* 
* @apiSuccessExample {json} Success-Response:
*  {
*    meta: {
*      code: 200
*    },
*    results: [
*      {
*        title: "MontBlank",
*        description: "nycWatch",
*        id: "key-1457086041786"
*      },
*      {
*        title: "samsungs6",
*        description: "nyc mobile",
*        id: "key-1457329231152"
*      }
*    ]
*  }
*
* @apiSuccessExample {json} Success-Response:
*  {
*    meta: {
*      code: 200
*    },
*    results: []
*  }
*/
function searchByTitle(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.searchByTitle(req.getInputObject()).then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  }); 
}


module.exports.index = index;
module.exports.create = create;
module.exports.remove = remove;
module.exports.update = update;
module.exports.show = show;
module.exports.removeAll = removeAll;
module.exports.searchByTitle = searchByTitle;

