const Workflow = require("../model/workflow.js");

const WorkflowService = {
  async createWorkflow(data) {
    const workflow = new Workflow(data);
    return await workflow.save();
  },

  async getAllWorkflows() {
    return await Workflow.find();
  },

  async getWorkflowById(id) {
    return await Workflow.findOne({ id });
  },
};

module.exports = WorkflowService;
