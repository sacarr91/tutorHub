const updateUserInfoButton = document.getElementById('updateUserInfo');
const changePasswordButton = document.getElementById('changePassword');

// populate form functions
// get the username from local storage
const userEmail = localStorage.getItem('username');
email = JSON.parse(userEmail);

// pull the user data from the api by user email
fetch(`./api/users/email/${email}`).then( response => {
    if(!response.ok) {
        alert('Sorry Something went wrong....')
    }
    return response.json();
    // handle the data in the appropriate form spaces 
}).then(data => {
    document.getElementById('choose-profile-image').value = data.profile_img;
    selectImage(data.profile_img);
    document.getElementById('salutation').value = data.salutation;
    document.getElementById('first-name').value = data.firstName;
    document.getElementById('last-name').value = data.lastName;
    document.getElementById('email-input').value = data.email;
    document.getElementById('zipcode').value = data.zipcode;

    // send the user_id out for use in other edit profile functions
    return user_id = data.id;
}).catch(err => alert('we apologize, something went wrong...', err))

// submit personal information button
updateUserInfoButton.addEventListener("click", async function(){
    const profile_img = document.getElementById('choose-profile-image').value;
    const salutation = document.getElementById('salutation').value;
    const firstname = document.getElementById('first-name').value;
    const lastname = document.getElementById('last-name').value;
    const email = document.getElementById('email-input').value;
    const zipcode = document.getElementById('zipcode').value;

    const response = await fetch(`./api/users/${user_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            profile_img: profile_img,
            salutation: salutation,
            firstname: firstname,
            lastname: lastname,
            email: email,
            zipcode: zipcode,

        })
    });
    if(response.ok) { alert ('🤘 you have successfully updated your personal information! 🤘')
        window.localStorage.setItem('username', JSON.stringify(email))
        window.location.reload();
    }
    else {alert('😵 Sorry, something went wrong, please ensure you are logged in, refresh the browser and try again 😵')}
});

// change password button
changePasswordButton.addEventListener("click", async function(){
    const password = document.getElementById('inputPassword5').value;
    const response = await fetch(`./api/users/${user_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
        })
    });
    if(response.ok) { alert ('🤐 you have successfully updated your password! 🤐')
    }
    else {alert('✋ Please ensure your password is at minimum 8 characters long')}
});
