export function createProjectHandler(setProjectsState) {
  return function () {
    setProjectsState((prevState) => ({
      ...prevState,
      isProjectSelectedToAdd: true,
      selectedProjectId: undefined,
    }));
  };
}

export function cancelHandler(setProjectsState) {
  return function () {
    setProjectsState((prevState) => ({
      ...prevState,
      isProjectSelectedToAdd: false,
    }));
  };
}

export function saveProjectHandler(setProjectsState) {
  return function (newProjectData) {
    const newProject = {
      ...newProjectData,
      id: crypto.randomUUID(),
    };

    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
      isProjectSelectedToAdd: false,
    }));
  };
}

export function selectProjectHandler(setProjectsState) {
  return function (projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
      isProjectSelectedToAdd: false,
    }));
  };
}

export function deleteProjectHandler(setProjectsState) {
  return function (projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter(
        (project) => project.id !== projectId,
      ),
      selectedProjectId:
        prevState.selectedProjectId === projectId ?
          undefined
        : prevState.selectedProjectId,
    }));
  };
}

export function addTaskHandler(taskData, setProjectState) {
  return function (selectedProjectId, taskData) {
    const newTask = {
      taskId: `task-${crypto.randomUUID().substring(0, 6).replace(/-/g, "")}`,
      projectId: selectedProjectId,
      content: taskData,
    };

    setProjectState((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, newTask],
    }));
  };
}
