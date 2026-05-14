import NewTask from "./NewTask";

function Tasks({ onAddTask, tasks, onDeleteTask, onDoneTask }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks </h2>
      <NewTask onAddTask={onAddTask} />
      {!tasks || tasks.length === 0 ?
        <p className="text-stone-800 italic my-10 text-center font-bold">
          This project does not have any tasks yet.
        </p>
      : <ul className="mt-8">
          {tasks.map((task) => (
            <li
              key={task.taskId}
              className={`flex items-center justify-between my-4 p-4 rounded-md bg-stone-100 hover:bg-stone-200 ${task.isDone ? "line-through text-stone-400" : ""}`}>
              <span className="text-stone-800">{task.content}</span>
              <div>
                <button
                  className="text-green-500 hover:text-green-700 mr-4"
                  aria-label={`Mark task ${task.content} as done`}
                  onClick={() => onDoneTask && onDoneTask(task.taskId)}>
                  Done
                </button>
                <button
                  onClick={() => onDeleteTask && onDeleteTask(task.taskId)}
                  className="text-red-500 hover:text-red-700"
                  aria-label={`Delete task ${task.content}`}>
                  Clear
                </button>
              </div>
            </li>
          ))}
        </ul>
      }
    </section>
  );
}

export default Tasks;
