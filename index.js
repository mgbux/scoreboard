// <---- Home Score ---->
let homeScore = document.getElementById("home-score")
let homeScoreValue = 0

function homeOne() {
    homeScoreValue += 1
    homeScore.textContent = homeScoreValue
}

function homeTwo() {
    homeScoreValue += 2
    homeScore.textContent = homeScoreValue
}

function homeThree() {
    homeScoreValue += 3
    homeScore.textContent = homeScoreValue
}

// <---- Guest Score ---->
let guestScore = document.getElementById("guest-score")
let guestScoreValue = 0

function guestOne() {
    guestScoreValue += 1
    guestScore.textContent = guestScoreValue
}

function guestTwo() {
    guestScoreValue += 2
    guestScore.textContent = guestScoreValue
}

function guestThree() {
    guestScoreValue += 3
    guestScore.textContent = guestScoreValue
}

// <---- Reset Scores ---->
function resetScores() {
    homeScoreValue = 0
    homeScore.textContent = homeScoreValue
    guestScoreValue = 0
    guestScore.textContent = guestScoreValue
}