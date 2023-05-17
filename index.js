
let homeScore = document.getElementById("home-score")
let homeScoreValue = 0

function homeOne() {
    homeScoreValue += 1
    homeScore.textContent = homeScoreValue
}
window.homeOne = homeOne

function homeTwo() {
    homeScoreValue += 2
    homeScore.textContent = homeScoreValue
}
window.homeTwo = homeTwo

function homeThree() {
    homeScoreValue += 3
    homeScore.textContent = homeScoreValue
}
window.homeThree = homeThree

let guestScore = document.getElementById("guest-score")
let guestScoreValue = 0

function guestOne() {
    guestScoreValue += 1
    guestScore.textContent = guestScoreValue
}
window.guestOne = guestOne

function guestTwo() {
    guestScoreValue += 2
    guestScore.textContent = guestScoreValue
}
window.guestTwo = guestTwo

function guestThree() {
    guestScoreValue += 3
    guestScore.textContent = guestScoreValue
}
window.homeOne = homeOne

function resetScores() {
    homeScoreValue = 0
    homeScore.textContent = homeScoreValue
    guestScoreValue = 0
    guestScore.textContent = guestScoreValue
}
window.resetScores = resetScores