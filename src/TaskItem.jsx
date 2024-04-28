import React, { useState } from "react";

// TaskItem component
const TaskItem = ({ task, index, onRemove, onToggleComplete }) => {
  return (
    <li className="flex items-center justify-between">
      <span
        className="text-2xl ml-4 text-center"
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button
        onClick={() => onRemove(index)}
        className="border-2 border-red-600 bg-red-600 my-4 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
      <button
        onClick={() => onToggleComplete(index)}
        className="border-2 border-blue-600 bg-blue-600 my-4 text-white px-2 py-1 rounded"
      >
        {task.completed ? "Mark Pending" : "Mark Complete"}
      </button>
    </li>
  );
};
export default TaskItem;