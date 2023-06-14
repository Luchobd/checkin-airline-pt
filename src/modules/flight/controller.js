const { Router } = require("express");
const {  getBoarding } = require("./services");

const router = Router();

router.get("/", getBoarding);

module.exports = router;
