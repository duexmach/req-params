const express = require("express");
const router = express.Router();

const { getController, postController } = require("../controllers/controller");

router.route("/").get(getController).post(postController);
router.route("/:id").get(getController).post(postController);

module.exports = router;
