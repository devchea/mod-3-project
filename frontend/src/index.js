const urlFighters = "http://localhost:3000/fighters";
const urlChallengers = "http://localhost:3000/challengers";
const urlMatches = "http://localhost:3000/matches";

fetch(urlFighters)
 .then(res => res.json())
 .then(fighters => {
     for(const fighter of fighters ){
         showFighter(fighter)
     }
 })

function showFighter(fighter){
   
const weight = document.createElement('p');
name.textContent = fighter.weight;

const fighterProfile = document.querySelector('#fighter-profile');
fighterProfile.append(weight);
}


const addbtn = document.querySelector('#add-fighter-btn');
addbtn.addEventListener('click', e => {
    e.preventDefault();
    const fighterId = e.target.dataset.fighterId

    fetch(`${urlFighters}/${fighterId}`)
     .then(res => res.json())
     .then(fighter => {
         showFighter(fighter)
     })
})