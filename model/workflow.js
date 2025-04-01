const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema({
  time: { type: String, required: true },
  status: { type: String, required: true, enum: ["Passed", "Failed"] },
});

const WorkflowSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  editedBy: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: [StatusSchema], required: true }, // Array of statuses
});

const Workflow = mongoose.model("Workflow", WorkflowSchema);

module.exports = Workflow;
