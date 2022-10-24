let homeScoreEL = document.getElementById('home')
let homeScore = 0
let guestScoreEL = document.getElementById('guest')
let guestScore = 0

function addOne(){
    homeScore = homeScore + 1
    homeScoreEL.innerText=homeScore
}

function addTwo(){
    homeScore = homeScore + 2
    homeScoreEL.innerText=homeScore
}

function addThree(){
    homeScore = homeScore + 3
    homeScoreEL.innerText=homeScore
}

function addOneGuest(){
    guestScore = guestScore + 1
    guestScoreEL.innerText=guestScore
}

function addTwoGuest(){
    guestScore = guestScore + 2
    guestScoreEL.innerText=guestScore
}

function addThreeGuest(){
    guestScore = guestScore + 3
    guestScoreEL.innerText=guestScore
}

function resetCount(){
homeScore = homeScore - homeScore
homeScoreEL.innerText=homeScore
guestScore = guestScore - guestScore
guestScoreEL.innerText=guestScore
}