const express = require("express");

const router = express.Router();
const helpController = require("../../controllers/helpController");
const employeeController = require("../../controllers/employeeController");

router.get("/help", helpController.helpDetails);
router.patch("/employee", employeeController.update);
router.get("/employee/:id/tax", employeeController.caclulateTax);
module.exports = router;