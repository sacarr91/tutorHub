const tutorNameInput = document.getElementById('tutorName');
const studentInput = document.getElementById('student');

reviewModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;
    const tutorName = button.getAttribute('data-tutor-name');
    tutorNameInput.value = tutorName;

    // Populate the hidden input field with the value from local storage
    const studentName = localStorage.getItem('username');
    if (studentName) {
        studentInput.value = studentName;
    }
});