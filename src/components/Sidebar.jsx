import Button from "./Button";

function Sidebar({
  onSelect,
  projects = [],
  onProjectSelect,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-tr-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onSelect} aria-label="Add project">
          ➕ Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className={`w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 cursor-pointer ${
                selectedProjectId === project.id ?
                  "bg-stone-800 text-stone-200"
                : ""
              }`}
              aria-current={
                selectedProjectId === project.id ? "true" : undefined
              }
              onClick={() => onProjectSelect && onProjectSelect(project.id)}>
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
