document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#form-master')
  form.addEventListener('submit', handleFormSubmit)

  const button = document.querySelector('#delete-btn')
  button.addEventListener('click', handleDeleteClick)
})


const handleFormSubmit = function(event) {
  event.preventDefault()

  const outcomeBlock = creatGamesList(event.target);

  // const gameInfo = gameInfo(event.target);

  const gamesList = document.querySelector('#games-list');
  gamesList.appendChild(outcomeBlock)

  const gamesListMod = document.querySelector('.game p');
  gamesListMod.textContent = this.title.value;
  // gamesListMod.appendChild(outcomeBlock)

  // const testListMod = document.querySelector('.test-div');
  // testListMod.textContent = this.title.value;

const testListMod = document.querySelector('.test-div');
  for (var i=0; i<5; i++) {
    testListMod.textContent = this.title.value;
  }







  event.target.reset();
}


// ______________

const creatGamesList = function (form) {

  // console.log(this);

const outcomeBlock = document.createElement('div');
outcomeBlock.classList.add('game');
const titleParagraph = document.createElement('p');
// const categoryParagraph = document.createElement('p');
// const scoreParagraph = document.createElement('p');
// const platform = document.createElement('p');

outcomeBlock.appendChild(titleParagraph);
// outcomeBlock.appendChild(categoryParagraph);
// outcomeBlock.appendChild(scoreParagraph);
// outcomeBlock.appendChild(platform);


// var c = document.createDocumentFragment();
for (var i=0; i<5; i++) {
  var e = document.createElement("div");
  e.className = "test-div";
  outcomeBlock.appendChild(e);
}
// document.body.appendChild(c);


// const listResult = document.querySelector('#games-list');
// listResult.appendChild(outcomeBlock)

return outcomeBlock

}

// ______________


// const gameInfo = function(form) {
//
//   titleParagraph = this.title.value;
//   categoryParagraph = this.category.value;
//   scoreParagraph = this.score.value;
//   platform = form.elements['platform'].value;
//
// console.log(titleParagraph);

// }





const handleDeleteClick = function() {
  const gamesList = document.querySelector('#games-list')
  gamesList.innerHTML = ''
}
