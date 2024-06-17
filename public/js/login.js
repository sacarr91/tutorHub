// Get reference of Log In button by id
const loginBtnEl = document.getElementById('login-btn');
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/find-a-tutor.html');
      window.localStorage.setItem("username", JSON.stringify(email))
    } else {
      alert('Failed to log in');
    }
  }
};

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

  loginBtnEl.addEventListener('click',loginFormHandler);
