var msg = new SpeechSynthesisUtterance();


const form = document.querySelector('form');
const matesList = document.querySelector(".mates");
let inputValue;
const fac ={
    Amy : {username : "Amy", avator :"https://avatars.githubusercontent.com/u/72794385?v=4"},
    Antonio : {username : "Antonio", avator : "https://avatars.githubusercontent.com/u/63958540?v=4"},
    Mariya : {username : "Mariya", avator : "https://avatars.githubusercontent.com/u/72445011?v=4"},
    Neville : {username : 'Naville', avator : 'https://avatars.githubusercontent.com/u/60395899?v=4'},
    Chun : {username : "Chun", avator :"https://avatars.githubusercontent.com/u/56611067?v=4"},
    Evgeny : {username : "Evgeny", avator :"https://avatars.githubusercontent.com/u/57327617?v=4"},
    Safia : {username : "Safia", avator :"https://avatars.githubusercontent.com/u/69358550?v=4"},
    Saki : {username : "Saki", avator :"https://avatars.githubusercontent.com/u/59439482?v=4"},
    Jo : {username : "Jo", avator :"https://avatars.githubusercontent.com/u/31373245?v=4"},
    Maryam : {username : "Maryam", avator :"https://avatars.githubusercontent.com/u/36102515?v=4"},
    Michael : {username : "Michael Devlin", avator : "https://avatars.githubusercontent.com/u/23028288?v=4" },
    Rosie : {username : "Rosie O'Donnell", avator :"https://avatars.githubusercontent.com/u/61861015?v=4" },
    Chisha : {username : "Chisha", avator : "" },
    Sevda : {username : "Sevda Shukrieva", avator :"https://avatars.githubusercontent.com/u/63476393?v=4" },
    Craig : {username : "Craig MacLeod", avator : "https://avatars.githubusercontent.com/u/54359248?v=4" },

    Nafisa : {username : "Nafisa", avator :""},
   
}

const resetBtn = document.querySelector('button');
let newLi;

form.addEventListener("submit", (event) => {
event.preventDefault();


inputValue = document.querySelector("#guess-input").value;
let usersKeysArray = Object.keys(fac);
let userArray = [];
for(let i=0; i<usersKeysArray.length; i++){
    // if(inputValue == usersKeysArray[i]){
    //     userArray.push(usersKeysArray[i])
    // }
    if(inputValue == usersKeysArray[i][0]){
        userArray.push(usersKeysArray[i])
    } 
}

if (userArray.length === 0) {
    matesList.append('No match')
}
for(let i=0; i<userArray.length; i++){
    newLi = document.createElement('li');
    let img = document.createElement('img');
    let mateName = document.createElement('p');

    newLi.append(img, mateName);
    mateName.append(fac[userArray[i]].username)
    img.setAttribute('src', fac[userArray[i]].avator);

    matesList.appendChild(newLi);
    
    msg.text = fac[userArray[i]].username;
    speechSynthesis.speak(msg); 
}




});

resetBtn.addEventListener('click', reset)
function reset() {
    let liChild = newLi
    matesList.remove(liChild);
    document.querySelector("#guess-input").value = '';
}
