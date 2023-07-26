let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let countHome = 0
let countGuest = 0

function onePointHome(){
    console.log("onePointHome")
    countHome += 1
    homeScore.textContent = countHome
}

function twoPointHome(){
    console.log("twopointHome")
    countHome += 2
    homeScore.textContent = countHome
}

function threePointHome(){
    console.log("threePointHome")
    countHome += 3
    homeScore.textContent = countHome
}

function onePointGuest(){
    console.log("onePointGuest")
    countGuest += 1
    guestScore.textContent = countGuest
}

function twoPointGuest(){
    console.log("onePointGuest")
    countGuest += 2
    guestScore.textContent = countGuest
}

function threePointGuest(){
    console.log("onePointGuest")
    countGuest += 3
    guestScore.textContent = countGuest
}