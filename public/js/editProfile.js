const editProfileButton = document.getElementById("edit-profile");

if (editProfileButton) {
  editProfileButton.addEventListener("click", async function () {
    // pull email from local storage
    let email = localStorage.getItem("username");

    //parse the JSON string to extract email value
    email = JSON.parse(email);

    // get user role_id
    const apiData = await fetch(`./api/users/email/${email}`);
    const data = await apiData.json();

    // if user role_id = 1 then display edit-profile-tutor.html
    if (data.role_id === 1) {
      location.href = "edit-profile-tutor.html";
    }

    // if user role_id = 2 then display edit-profile-student.html
    else {
      location.href = "edit-profile-student.html";
    }
  });
}
