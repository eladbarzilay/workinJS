const uniqid = require("uniqid");
const taskModel = require("../models/TaskModel");

 function read() {
  return taskModel.find();
}

function create(newTask) {
  newTask.id = uniqid();
  return taskModel.create(newTask);
}

function update(_id, newData) {
  return taskModel.findByIdAndUpdate(
      _id,
      newData,
      { new: true, runValidators: true }
  )
}

function remove(_id) {
  return taskModel.findByIdAndDelete(_id);
}

module.exports = {
  read,
  create,
  update,
  delete: remove,
};
