const urlFighters = "http://localhost:3000/fighters";
const urlChallengers = "http://localhost:3000/challengers";
const urlMatches = "http://localhost:3000/matches";

fetch(urlFighters)
 .then(res => res.json())
 .then(fighters => {
     for(const fighter of fighters){
         fighterDropdown(fighter)
     }
 })

function fighterDropdown(fighter) {

  const selectFighter = document.querySelector('#first-fighter')
  const optionFighter = document.createElement('option')
  optionFighter.value = `${fighter.first_name} ${fighter.last_name}`
  optionFighter.innerHTML = `${fighter.first_name} ${fighter.last_name}`;
  optionFighter.id = `${fighter.id}`
  selectFighter.append(optionFighter)


  const selectChallenger = document.querySelector('#second-fighter');
  const optionChallenger = document.createElement('option');
  optionChallenger.value = `${fighter.first_name} ${fighter.last_name}`;
  optionChallenger.innerHTML = `${fighter.first_name} ${fighter.last_name}`;
  selectChallenger.append(optionChallenger);
}

const form = document.querySelector('#fighter-form');
const selectFighter = document.querySelector('#first-fighter')
const selectChallenger = document.querySelector('#second-fighter')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(selectFighter.options[selectFighter.selectedIndex].value)
  console.log(selectFighter.options[selectFighter.selectedIndex].id)


})

function showFighter(fighter) {

  const fighterProfile = document.querySelector('#fighter-profile');
  const ul = document.createElement('ul');
  const name = document.createElement('p')
  name.textContent = `${fighter.first_name} ${fighter.last_name}`;


}

