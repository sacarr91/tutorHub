const loginArea = document.querySelector('#loginarea');
const userName = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")) : "";


const clearArea = (area) => {
    document.querySelector(area).innerHTML = "";
}

const replaceWithName = (name) => {
    clearArea('#loginarea');
    loginArea.innerHTML = `${name} <button id='logout' class='ms-2'>Log Out</button>`
}

console.log(userName)

const logic = () => {
    if(userName != ""){
        replaceWithName(userName)
    }
    }

    logic()