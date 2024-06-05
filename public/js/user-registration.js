const tutorRadioEl = document.getElementById('tutor-radio');
const studentRadioEl = document.getElementById('student-radio');
const salutationEl = document.getElementById('salutation');
const firstNameEl = document.getElementById('first-name');
const lastNameEl = document.getElementById('last-name');
const emailAddressEl = document.getElementById('email-input');
const passwordInputEl = document.getElementById('inputPassword5');
const nextButtonEl = document.getElementById('next');
let selectedAccountType = "";
let userInfo = "";

function findUserAccountType() {
    let selectionEl = document.getElementsByName("flexRadioDefault");
    for (let i = 0; i < selectionEl.length; i++) {
        if (selectionEl[i].checked) {
            selectedAccountType = selectionEl[i].value;
        }
    }
    // Call function to capture user information
    captureUserInfo();

}

function captureUserInfo() {
    const salutation = salutationEl.value;
    const firstName = firstNameEl.value;
    const lastName = lastNameEl.value;
    const emailAddress = emailAddressEl.value;
    const password = passwordInputEl.value;
    if (selectedAccountType === "" || firstName === "" || lastName === "" || emailAddress === "" || password === "") {
        window.alert("Please enter all fields")
    } else {
        userInfo = {
            "AccountType": selectedAccountType,
            "User": {
                "Salutation": salutation,
                "FirstName": firstName,
                "LastName": lastName,
                "EmailAddress": emailAddress,
                "Password": password
            }

        }
        // If userinfo is present, redirect the user based on Account Type
        if (userInfo.AccountType === "tutor") {
            userInfo = JSON.stringify(userInfo);
            localStorage.clear();
            localStorage.setItem("userInfo", userInfo);
            location.href = "/public/user-registration-pg2-tutor.html"
        } else {
            userInfo = JSON.stringify(userInfo);
            localStorage.clear();
            localStorage.setItem("userInfo", userInfo);
            location.href = "/public/user-registration-pg2-student.html"
        }
    }

}

nextButtonEl.addEventListener('click', (event) => {
    event.preventDefault();
    // call function findUserAccountType
    findUserAccountType();
})
