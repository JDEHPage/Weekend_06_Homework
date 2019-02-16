document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#form-master')
  form.addEventListener('submit', handleFormSubmit)

  const button = document.querySelector('#delete-btn')
  button.addEventListener('click', handleDeleteClick)
})


const handleFormSubmit = function(event) {
  event.preventDefault()

// console.log(event);

  const outcomeBlock = creatGamesList(event.target);

  const list = getGamesInfo(event.target);

  const gamesList = document.querySelector('#games-list');
  gamesList.appendChild(outcomeBlock)

  event.target.reset();
}


// ______________

const creatGamesList = function (form) {

  // console.log(form);


const outcomeBlock = document.createElement('div');
outcomeBlock.classList.add('game');
const titleParagraph = document.createElement('p');
const categoryParagraph = document.createElement('p');
const scoreParagraph = document.createElement('p');
const platform = document.createElement('p');

outcomeBlock.appendChild(titleParagraph);
outcomeBlock.appendChild(categoryParagraph);
outcomeBlock.appendChild(scoreParagraph);
outcomeBlock.appendChild(platform);

// const listResult = document.querySelector('#games-list');
// listResult.appendChild(outcomeBlock)

return outcomeBlock

}

const getGamesInfo = function (from) {

  const list = document.querySelector('.game');

console.log(list);

  // list.titleParagraph.textContent = this.title.value;
  // list.categoryParagraph.textContent = this.category.value;
  // list.scoreParagraph.textContent = this.score.value;
  // list.platform.textContent = form.elements['platform'].value;

}

// const putGameInfoTogether = function (from) {
//
//   outcomeBlock.appendChild(titleParagraph);
//   outcomeBlock.appendChild(categoryParagraph);
//   outcomeBlock.appendChild(scoreParagraph);
//   outcomeBlock.appendChild(platform);
//
// }

// ______________

const handleDeleteClick = function() {
  const gamesList = document.querySelector('#games-list')
  gamesList.innerHTML = ''
}
