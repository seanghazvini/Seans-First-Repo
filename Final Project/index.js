const storeData = [
  {name: "project one", finished: true},
  {name: "project two", finished: false},
  {name: "project three", finished: false},
];

function generateItemElement(item, itemIndex, template) {
  return `
    <li class="js-item-index-element" data-item-index="${itemIndex}">
      <span class="project-item js-project-item ${item.finished ? "project-item__finished" : ''}" > ${item.name}</span>
      <div class="project-item-controls">
        <button class="project-item-toggle js-item-toggle">
            <span class="button-label"><i class="material-icons">done</i></span>
        </button>
        <button class="project-item-delete js-item-delete">
            <span class="button-label"><i class="material-icons">delete</i></span>
        </button>
      </div>
    </li>`;
}

function generateProjectItemsString(projectList) {
  const items = projectList.map((item, index) => generateItemElement(item, index));
  return items.join("");
}

function renderProjectList() {
  const projectListItemsString = generateProjectItemsString(storeData);
  $('.js-project-list').html(projectListItemsString);
}

function addItemToProjectList(itemName) {
  storeData.push({name: itemName, finished: false});
}

function handleNewItemSubmit() {
  $('#js-project-list-form').submit(function(event) {
    event.preventDefault();
    const newItemName = $('.js-project-list-entry').val();
    $('.js-project-list-entry').val('');
    addItemToProjectList(newItemName);
    renderProjectList();
  });
}

function deleteListItem(itemIndex) {
  storeData.splice(itemIndex, 1); 
}

function toggleFinishedForListItem(itemIndex) {
  storeData[itemIndex].finished = !storeData[itemIndex].finished;
}

function getItemIndexFromElement(item) {
  const itemIndexString = $(item)
    .closest('.js-item-index-element')
    .attr('data-item-index');
  return parseInt(itemIndexString, 10);
}

function handleItemCheckClicked() {
  $('.js-project-list').on('click', `.js-item-toggle`, event => {
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    toggleFinishedForListItem(itemIndex);
    renderProjectList();
  });
}

function handleDeleteItemClicked() {
  $('.js-project-list').on('click', '.js-item-delete', event => { 
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    deleteListItem(itemIndex);
    renderProjectList();
  });
}

function runFunctions() {
  renderProjectList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

$(runFunctions);
