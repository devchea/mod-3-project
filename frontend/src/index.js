const urlFighters = "http://localhost:3000/fighters";
const urlChallengers = "http://localhost:3000/challengers";
const urlMatches = "http://localhost:3000/matches";

fetch(urlFighters)
 .then(res => res.json())
 .then(fighters => {
     for(const fighter of fighters){
         showFighter(fighter)
         fighterDropdown(fighter)
     }
 })

function showFighter(fighter){

    const fighterProfile = document.querySelector('#fighter-profile');
    const ul = document.createElement('ul');
    const name = document.createElement('p')
    name.textContent = `${fighter.first_name} ${fighter.last_name}`;


}

function fighterDropdown(fighter) {
  const select = document.querySelector('#first-fighter')
  const option = document.createElement('option')
  option.value = `${fighter.first_name} ${fighter.last_name}`
  option.innerHTML = `${fighter.first_name} ${fighter.last_name}`;
  select.append(option)
}



