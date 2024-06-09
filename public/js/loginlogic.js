const loginArea = document.querySelector('#loginarea')

const clearArea = (area) => {
    document.querySelector(area).innerHTML = "";
}

const replaceWithName = () => {
    clearArea('#loginarea');
    loginArea.innerHTML = "Welcome Joe"
}