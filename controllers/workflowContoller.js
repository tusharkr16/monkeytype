const WorkflowService = require("../services/workflow.js");
const Workflow = require("../model/workflow.js"); 

const WorkflowController = {
  async createWorkflow(req, res) {
    try {
      const workflow = await WorkflowService.createWorkflow(req.body);
      return res.status(201).json({ success: true, data: workflow });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  async getAllWorkflows(req, res) {
    try {
      const workflows = await WorkflowService.getAllWorkflows();
      return res.status(200).json({ success: true, data: workflows });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  async getWorkflowById(req, res) {
    try {
      const workflow = await WorkflowService.getWorkflowById(req.params.id);
      if (!workflow) {
        return res.status(404).json({ success: false, message: "Not Found" });
      }
      return res.status(200).json({ success: true, data: workflow });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  async searchWorkflowByName(req, res) {
    try {
      const { name } = req.query;
      if (!name) {
        return res.status(400).json({ error: "Name query parameter is required" });
      }

      const workflows = await Workflow.find({ name: { $regex: name, $options: "i" } });

      if (workflows.length === 0) {
        return res.status(404).json({ message: "No workflows found" });
      }

      res.json({ success: true, data: workflows });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = WorkflowController;
