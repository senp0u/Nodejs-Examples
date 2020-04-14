const router = require("express").Router();
const { QuotesController } = require("../controllers");

router.get("/", QuotesController.index);
router.post("/", QuotesController.add);
router.get("/all", QuotesController.get);

module.exports = router;