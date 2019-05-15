const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/posts", postController.getAllPost);
router.post("/posts/create", postController.create);
router.get("/posts/:id", postController.show);

module.exports = router;
