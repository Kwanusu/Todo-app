import TaskFilter from "./TaskFilter";
import TaskItem from "./TaskItem";
import { useState } from "react";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("all");
  
    const handleAddTask = () => {
      if (newTask.trim() !== "") {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
      }
    };
  
    const handleRemoveTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    const toggleComplete = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      setTasks(updatedTasks);
    };
  
    const filteredTasks = tasks.filter((task) => {
      if (filter === "all") return true;
      if (filter === "complete") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    });
  
    return (
      <div className="mt-4">
        <div className="text-4xl text-center">Todo List: {filteredTasks.length} Tasks</div>
        <div className="mt-4 flex justify-center">
          <input
            className="border-2 p-1 bg-gray-300 mr-2"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={handleAddTask}
            className="border-2 border-green-500 bg-green-500 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        </div>
        <TaskFilter filter={filter} setFilter={setFilter} />
        <ul className="mt-4">
          {filteredTasks.map((task, index) => (
            <TaskItem className="mr-4"
              key={index}
              task={task}
              index={index}
              onRemove={handleRemoveTask}
              onToggleComplete={toggleComplete}
            />
          ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;