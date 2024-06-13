const tutorRadioEl = document.getElementById('tutor-radio');
const studentRadioEl = document.getElementById('student-radio');
const nextButtonEl = document.getElementById('next');
let selectedAccountType = "";
const checkboxes = document.querySelectorAll('.form-check-input');

function findUserAccountType() {
    let selectionEl = document.getElementsByName("flexRadioDefault");
    for (let i = 0; i < selectionEl.length; i++) {
        if (selectionEl[i].checked) {
            selectedAccountType = selectionEl[i].value;
        }
    }
    // Call function to redirect user for account creation
    redirectUserForAccountCreation();

}

function redirectUserForAccountCreation() {
    if (selectedAccountType === "") {
        window.alert("Please choose an account type.")
    } else {
        // If userinfo is present, redirect the user based on Account Type
        if (selectedAccountType === "tutor") {
            location.href = "tutor-registration-pete+.html"
        } else {
            location.href = "student-registration.html"
        }
    }

}

nextButtonEl.addEventListener('click', (event) => {
    event.preventDefault();
    // call function findUserAccountType
    findUserAccountType();
})

const changeValue = (e) => {
    e.target.toggleAttribute("checked");
}

for (let i = 0; i < checkboxes.length; i++) {
    let box = checkboxes[i]
    box.addEventListener("click", changeValue);
}