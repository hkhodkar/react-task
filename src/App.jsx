import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from './components/SelectedProject.jsx'

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

  function handleSelectProject(project) {
    console.log(project);
    setProjectStates(prev => {
      return {
        ...prev,
        selectedProjectId: project.id
      }
    })
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancelProject={handleCancelProject} onAddProject={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else {
    const selectedProject = projectsState.projects.find(item => item.id === projectsState.selectedProjectId);
    content = <SelectedProject project={selectedProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onSelectedProject={handleSelectProject} projects={projectsState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
