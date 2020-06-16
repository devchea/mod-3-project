const urlFighters = "http://localhost:3000/fighters";
const urlChallengers = "http://localhost:3000/challengers";
const urlMatches = "http://localhost:3000/matches";

  fetch(urlFighters)
    .then(res => res.json())
    .then(fighters => {
      for (const fighter of fighters) {
        createDropdown(fighter)
      }
    })


function createDropdown(fighter) {
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
  optionChallenger.id = `${fighter.id}`
  selectChallenger.append(optionChallenger);

}


const form = document.querySelector('#fighter-form');
const selectFighter = document.querySelector('#first-fighter')
const selectChallenger = document.querySelector('#second-fighter')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  //get first fighter and second fighter ids from dropdown and input
  const selectFighterId = selectFighter.options[selectFighter.selectedIndex].id
  const selectChallengerId = selectChallenger.options[selectChallenger.selectedIndex].id
  const venueInput = document.querySelector('#venue-input').value

  //reset dropdown menu to default
  selectFighter.selectedIndex = 0
  selectChallenger.selectedIndex = 0

  //pass information taken from user inputs to find the fighters
  fighterFind(selectFighterId, selectChallengerId)

  //pass information taken from user inputs to create a new match
  createMatch(selectFighterId, selectChallengerId, venueInput)

  form.reset()
})

//POST a match from user inputs
function createMatch(selectFighterId, selectChallengerId, venueInput) {

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      fighter_id: selectFighterId,
      challenger_id: selectChallengerId,
      venue: venueInput
    })
  }

  fetch(urlMatches, options)
  .then(res => res.json())
  .then(json =>{
    // console.log(jsosn)
  })

}

function fighterFind(selectFighterId, selectChallengerId) {

  fetch(urlFighters)
   .then(res => res.json())
   .then(fighters => {
     const fighter1 = fighters.filter(fighter => fighter.id == selectFighterId)
     const fighter2 = fighters.filter(fighter => fighter.id == selectChallengerId)
       showMatch(fighter1, fighter2)
   })
}
  
  function showMatch(fighter1, fighter2) {
    //fighter section
    
    const fighterProfile = document.querySelector('#fighter-profile');
    fighterProfile.innerHTML = ''
    const ulFighter = document.createElement('ul');
    const fighterName = document.createElement('p')
    fighterName.textContent = `${fighter1[0].first_name} ${fighter1[0].last_name}`;
    const fighterHeight = document.createElement('li');
    fighterHeight.innerHTML = `Height:${fighter1[0].height}`;
    const fighterWeight = document.createElement('li');
    fighterWeight.innerHTML = `Weight:${fighter1[0].weight}`;
    const fighterImg = document.createElement('img');
    fighterImg.src = `./assets/${fighter1[0].id}.png`;
    
    ulFighter.append(fighterImg, fighterWeight, fighterHeight)
    fighterProfile.append(fighterName, ulFighter);
     
    //challenger section
    const challengerProfile = document.querySelector('#challenger-profile');
    challengerProfile.innerHTML = ''
    const ulChallenger = document.createElement('ul');
    const challengerName = document.createElement('p')
    challengerName.textContent = `${fighter2[0].first_name} ${fighter2[0].last_name}`;
    const challengerHeight = document.createElement('li');
    challengerHeight.innerHTML = `Height:${fighter2[0].height}`;
    const challengerWeight = document.createElement('li');
    challengerWeight.innerHTML = `Weight:${fighter2[0].weight}`;
    const challengerImg = document.createElement('img');
    challengerImg.src = `./assets/${fighter2[0].id}.png`;

    
    ulChallenger.append(challengerImg, challengerWeight, challengerHeight)
    challengerProfile.append(challengerName, ulChallenger);

    
  }
