var PostFacade = require("../../lib/facade/posts");

function index(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.index(req.getInputObject()).then(function(output){
      res.status(200).send(global.shape(output))
  }).catch(function(e){
      next(e);
  });
  // res.send({msg: "hello"});
}

function show(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.show(req.getInputObject()).then(function(output){
      res.status(200).send(global.shape(output))
  }).catch(function(e){
      next(e);
  });
}


function create(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.create(req.getInputObject()).then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  });
}

function remove(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.remove(req.getInputObject()).then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  });
}

function update(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.update(req.getInputObject()).then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  }); 
}



function removeAll(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.removeAll().then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  }); 
}

function searchByTitle(req, res, next){
  var postFacade = new PostFacade(req);

  postFacade.searchByTitle(req.getInputObject()).then(function(output){
      res.status(200).send(global.shape(output));
  }).catch(function(e){
      next(e);
  }); 
}

// function new(req, res, next){
//   res.send({msg: "new"});
// }


module.exports.index = index;
module.exports.create = create;
module.exports.remove = remove;
module.exports.update = update;
module.exports.show = show;
module.exports.removeAll = removeAll;
module.exports.searchByTitle = searchByTitle;

