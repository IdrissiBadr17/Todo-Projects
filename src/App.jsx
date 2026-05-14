import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import MainNewProject from "./components/MainNewProject";
import Sidebar from "./components/Sidebar";
import ProjectDetails from "./components/ProjectDetails";
import {
  createProjectHandler,
  cancelHandler,
  saveProjectHandler,
  selectProjectHandler,
  deleteProjectHandler,
} from "./handlers/projectHandlers";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    isProjectSelectedToAdd: false,
    projects: [],
    tasks: [],
  });

  const handleCreateProject = createProjectHandler(setProjectsState);
  const handleCancel = cancelHandler(setProjectsState);
  const handleSaveProject = saveProjectHandler(setProjectsState);
  const handleSelectProject = selectProjectHandler(setProjectsState);
  const handleDeleteProject = deleteProjectHandler(setProjectsState);

  function handleAddTask(taskData) {
    const newTask = {
      taskId: `task-${crypto.randomUUID().substring(0, 6).replace(/-/g, "")}`,
      projectId: projectsState.selectedProjectId,
      content: taskData,
    };
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, newTask],
    }));
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.taskId !== taskId),
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  let content = <NoProjectSelected onSelect={handleCreateProject} />;

  if (projectsState.isProjectSelectedToAdd) {
    content = (
      <MainNewProject onCancel={handleCancel} onSave={handleSaveProject} />
    );
  } else if (selectedProject) {
    content = (
      <ProjectDetails
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks}
      />
    );
  }
  console.log(projectsState);

  return (
    <main className="h-screen mt-8 flex gap-8">
      <Sidebar
        onSelect={handleCreateProject}
        onProjectSelect={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
