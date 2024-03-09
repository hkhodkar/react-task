import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from './components/SelectedProject.jsx'

function App() {

  const [projectsState, setProjectStates] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
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
        selectedProjectId: undefined,
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
    setProjectStates(prev => {
      return {
        ...prev,
        selectedProjectId: project.id
      }
    })
  }

  function handleDeleteProject(projectId) {
    setProjectStates(prev => {
      const newProjects = projectsState.projects.filter(item => item.id !== projectId);
      return {
        ...prev,
        projects: newProjects,
        selectedProjectId: undefined
      }
    })
  }

  function handleAddTask(task) {
    setProjectStates(prev => {
      const newTask = { task, projectId: prev.selectedProjectId, taskId: Math.random() };
      return ({
        ...prev,
        tasks: [
          ...prev.tasks,
          newTask,
        ]
      })
    })
  }

  function handleDeleteTask(taskId) {
    setProjectStates(prev => {
      return {
        ...prev,
        tasks: prev.tasks.filter(item => item.taskId !== taskId)
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
    const tasks = projectsState.tasks.filter(item => item.projectId === projectsState.selectedProjectId);
    content = <SelectedProject
      tasks={tasks}
      onAddTaskToProject={handleAddTask}
      onDeleteProject={handleDeleteProject}
      project={selectedProject} 
      handleDeleteTask={handleDeleteTask}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar selectedProjectId={projectsState.selectedProjectId} onSelectedProject={handleSelectProject} projects={projectsState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
