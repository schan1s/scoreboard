// board 1

let countEl = document.getElementById("count-el")
let count = 0


function incrementHome1() {
    count += 1
    countEl.textContent = count
}

function incrementHome2() {
    count += 2
    countEl.textContent = count
}

function incrementHome3() {
    count += 3
    countEl.textContent = count
}



// board 2

let countEl2 = document.getElementById("count-el2")
let count2 = 0

function incrementGuest1() {
    count2 += 1
    countEl2.textContent = count2
}

function incrementGuest2() {
    count2 += 2
    countEl2.textContent = count2
}

function incrementGuest3() {
    count2 += 3
    countEl2.textContent = count2
}