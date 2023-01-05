const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get('/create', controller.getPastebinPage);
router.post('/create', controller.addPaste);
router.get('/recent', controller.getRecentPage);
router.post('/recent', controller.deletePaste);
router.get('/about', controller.getAboutPage);
router.get("/:id", controller.getPasteById);

module.exports = router;
