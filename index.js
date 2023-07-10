let homescore = document.getElementById("homescore")
let guestscore = document.getElementById("guestscore")


let count = 0    


function increase1(){
count++
homescore.textContent = count
}

function increase2(){
count += 2
homescore.textContent = count
}

function increase3(){
count += 3
homescore.textContent = count
}

let counts = 0
function increment1(){
counts++
guestscore.textContent = counts
}

function increment2(){
counts += 2
guestscore.textContent = counts
}

function increment3(){
counts += 3
guestscore.textContent = counts
}