function generateProjectsString(projectList) {
  const Projects = projectList.map((project, index) => generateprojectElement(project, index));
  return Projects.join("");
}

function renderProjectList() {
  const listProjects = generateProjectsString(storeData);
  $('.js-project-list').html(listProjects);
}

function addprojectToProjectList(projectName) {
  storeData.push({name: projectName, finished: false});
}

function addNewProject() {
  $('#js-project-list-form').submit(function(event) {
    event.preventDefault();
    
    const newProjectName = $('.js-project-list-entry').val();
    $('.js-project-list-entry').val('');
    addprojectToProjectList(newProjectName);
    renderProjectList();
  });
}

function deleteListproject(projectIndex) {
  storeData.splice(projectIndex, 1); 
}

function finishedproject(projectIndex) {
  storeData[projectIndex].finished = !storeData[projectIndex].finished;
}

function getprojectIndexFromElement(project) {
  const projectIndexString = $(project)
    .closest('.js-project-index-element')
    .attr('data-project-index');
  return parseInt(projectIndexString, 10);
}

function projectChecked() {
  $('.js-project-list').on('click', `.js-project-toggle`, event => {
    const projectIndex = getprojectIndexFromElement(event.currentTarget);
    finishedproject(projectIndex);
    renderProjectList();
  });
}

function deleteproject() {
  $('.js-project-list').on('click', '.js-project-delete', event => { 
    const projectIndex = getprojectIndexFromElement(event.currentTarget);
    deleteListproject(projectIndex);
    renderProjectList();
  });
}

function runFunctions() {
  renderProjectList();
  addNewProject();
  projectChecked();
  deleteproject();
}

$(runFunctions);

const storeData = [
  {name: "project one", finished: true},
  {name: "project two", finished: false},
  {name: "project three", finished: false},
];

function generateprojectElement(project, projectIndex, template) {
  return `
    <li class="js-project-index-element" data-project-index="${projectIndex}">
      <span class="project js-project ${project.finished ? "project_finished" : ''}" > ${project.name}</span>
      <div class="project-controls">
        <button class="project-toggle js-project-toggle">
            <span class="button-label"><i class="material-icons">done</i></span>
        </button>
        <button class="project-delete js-project-delete">
            <span class="button-label"><i class="material-icons">delete</i></span>
        </button>
      </div>
    </li>`;
}