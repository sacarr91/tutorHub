const loginArea = document.querySelector('#loginarea');
const userName = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")) : "";


const clearArea = (area) => {
    document.querySelector(area).innerHTML = "";
}

const replaceWithName = (name) => {
    clearArea('#loginarea');
    loginArea.innerHTML = `
        <ul class="navbar-nav" id="loginarea">
           <li>
                <p class='ms-2 mt-1 patrick' id='display-user-name'>Welcome, ${name}!</p>
            </li>
            <li class='nav-item'>
                <a class='nav-link light-text ms-2' style='font-size: smaller' id='edit-profile'>Edit Profile</a>
            </li>
            <li class='nav-item'>
                <a class='nav-link light-text ms-2' style='font-size: smaller' id='logout'>Log Out</a>
            </li>
        </ul>`
}


const logic = () => {
    if (userName != "") {
        replaceWithName(userName)
    }
}

logic()

