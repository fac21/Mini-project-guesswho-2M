const form = document.querySelector('form');
const matesList = document.querySelector(".mates");
let inputValue;
const fac ={
    Amy : {username : "Amy", avator :"url(https://avatars.githubusercontent.com/u/72794385?v=4)" },
    Antonio : {username : "Antonio", avator : "https://avatars.githubusercontent.com/u/63958540?v=4" },
    Maria : {sername : "Maria", avator : "https://avatars.githubusercontent.com/u/72445011?v=4"}
}

form.addEventListener("submit", (event) => {
event.preventDefault();


inputValue = document.querySelector("#guess-input").value;
let usersKeysArray = Object.keys(fac);
let userArray = [];
for(let i=0; i<usersKeysArray.length; i++){
    if(inputValue == usersKeysArray[i][0]){
        userArray.push(usersKeysArray[i])
    }
}

console.log(inputValue)
console.log(usersKeysArray)
console.log(userArray)


    

});
