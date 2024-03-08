import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject.jsx";

function App() {

  const [projectsState, setProjectStates] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setProjectStates(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(project) {
    const projectId = Math.random();
    const newProject = {
      ...project,
      id: projectId
    };
    setProjectStates(prev => {
      return {
        ...prev,
        projectId: undefined,
        projects: [...prev.projects, newProject]
      }
    })
  }

  function handleCancelProject() {
    setProjectStates(prev => {
      return {
        ...prev,
        selectedProjectId: undefined
      }
    })
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancelProject={handleCancelProject} onAddProject={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar projects={projectsState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
