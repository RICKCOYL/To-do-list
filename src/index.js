// import 'bootstrap/js/dist/collapse';
import './css/style.css';
import Project from './components/projectconstructor';
import domModule from './components/dom';
import { ProjectForm, TaskForm } from './components/logic';
import { updateLocalStorage } from './components/module';

document
  .getElementById('submit-task-form-button')
  .addEventListener('click', () => {
    TaskForm();

    const tasksList = JSON.parse(localStorage.getItem('selected project')).tasks || [];
    const tasksColumn = document.querySelector('.task-list');
    domModule.populateList(tasksColumn, tasksList, domModule.displayTask);
    document.getElementById('display-task-form-btn').click();
  });

document
  .getElementById('submit-project-form-button')
  .addEventListener('click', () => {
    ProjectForm();
    const projectsList = JSON.parse(localStorage.getItem('projects')) || [];
    const projectsColumn = document.querySelector('.project-list');

    domModule.populateList(
      projectsColumn,
      projectsList,
      domModule.displayProject,
    );
    document.getElementById('display-form-btn').click();
  });

const projects = JSON.parse(localStorage.getItem('projects'));
const selectedProject = JSON.parse(localStorage.getItem('selected-project'));

if (projects === null) {
  const seedProject = new Project('Default Project');
  updateLocalStorage([['projects', JSON.stringify([seedProject])]]);
}
if ([null, []].includes(selectedProject)) {
  const firstProject = JSON.parse(localStorage.getItem('projects'))[0];
  updateLocalStorage([['selected project', JSON.stringify(firstProject)]]);
}

domModule.refreshLists();
