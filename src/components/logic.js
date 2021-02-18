import Task from './taskconstructor';
import Project from './projectconstructor';

const ProjectForm = () => {
  const ProjectTitle = document.getElementById('projectTitle').value;

  const projectInput = document.getElementById('projectTitle');
  projectInput.value = '';

  const newProject = new Project(ProjectTitle);
  const projectsList = JSON.parse(localStorage.getItem('projects')) || [];
  projectsList.push(newProject);
  localStorage.setItem('projects', JSON.stringify(projectsList));
};

const TaskForm = () => {
  const newTaskTitle = document.getElementById('task-input-title').value;
  const newTaskDescription = document.getElementById(
    'task-input-description',
  ).value;
  const newTaskDueDate = document.getElementById('task-input-date').value;
  const newTaskPriority = document.getElementById('task-input-priority').value;

  document.getElementById('task-input-title').value = '';
  document.getElementById('task-input-description').value = '';
  document.getElementById('task-input-date').value = '';
  document.getElementById('task-input-priority').value = 'Low';

  const newTask = new Task(
    newTaskTitle,
    newTaskDescription,
    newTaskDueDate,
    newTaskPriority,
  );

  const projectsList = JSON.parse(localStorage.getItem('projects'));
  const selectedProject = JSON.parse(localStorage.getItem('selected project'));

  const selectedProjectTaskList = selectedProject.tasks || [];
  selectedProjectTaskList.push(newTask);

  let selectedProjectIndex;

  for (let i = 0; i < projectsList.length; i += 1) {
    if (projectsList[i].title === selectedProject.title) {
      selectedProjectIndex = i;
    }
  }

  selectedProject.tasks = selectedProjectTaskList;
  projectsList[selectedProjectIndex].tasks = selectedProjectTaskList;

  localStorage.setItem('projects', JSON.stringify(projectsList));
  localStorage.setItem('selected project', JSON.stringify(projectsList[selectedProjectIndex]));
};

export { ProjectForm, TaskForm };