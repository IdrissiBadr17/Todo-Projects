import { useState } from "react";
function NewTask({ onAddTask }) {
  const [task, setTask] = useState("");

  function handleAddTask() {
    // Prevent adding empty tasks
    if (!task || task.trim() === "") return;
    onAddTask(task.trim());
    setTask("");
  }

  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-64 px-4 py-2 rounded-md bg-stone-200 text-stone-800
        focus:outline-none focus:ring-2 focus:ring-stone-400
        placeholder:text-stone-400 placeholder:italic"
      />
      <button
        onClick={handleAddTask}
        className="text-stone-700 hover:text-stone-950 cursor-pointer">
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
