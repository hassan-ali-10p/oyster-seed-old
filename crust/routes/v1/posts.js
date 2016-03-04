var postController = require("../../controllers/posts");
var router = require('express').Router();

router.get("/searchByTitle", postController.searchByTitle);

/*  RestFull Routes */
router.get("/", postController.index);
router.post("/", postController.create);
router.get("/:id", postController.show);
router.put("/:id", postController.update);
router.delete("/:id", postController.remove);

router.delete("/", postController.removeAll);

module.exports = router;
