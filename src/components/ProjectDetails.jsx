import Tasks from "./Tasks";

function ProjectDetails({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
  onDoneTask,
}) {
  const formattedDate =
    project && project.dueDate ?
      new Date(project.dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No due date";
  return (
    <div className="w-140 mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project?.title ?? "Untitled Project"}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={() => onDelete && onDelete(project?.id)}>
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project?.description ?? "No description provided."}
        </p>
      </header>
      <Tasks
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        onDoneTask={onDoneTask}
        tasks={tasks}
      />
    </div>
  );
}

export default ProjectDetails;
