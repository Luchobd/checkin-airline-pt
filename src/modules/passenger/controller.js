const { Router } = require("express");
const { getPassenger } = require("./services");

const router = Router();

router.get("/", getPassenger);

module.exports = router;
