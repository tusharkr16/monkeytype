const express = require("express");
const WorkflowController = require("../controllers/workflowContoller.js");

const router = express.Router();

router.post("/workflows", WorkflowController.createWorkflow);
router.get("/workflows", WorkflowController.getAllWorkflows);
router.get("/search", WorkflowController.searchWorkflowByName);

module.exports = router;
