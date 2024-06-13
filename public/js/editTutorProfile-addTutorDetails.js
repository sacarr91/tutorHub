const addInstrumentButton = document.getElementById('addInstrument');
const addCertificationButton = document.getElementById('addCertification');

addInstrumentButton.addEventListener("click", async function(){
    // pull email from local storage
    let email = localStorage.getItem('username');
    //parse the JSON string to extract email value
    email = JSON.parse(email); 
    // get user id
    const apiData = await fetch(`./api/users/email/${email}`);
    const data = await apiData.json();
    const user_id = data.id;
    // Get the selected instrument_id from the form
    const instrument_id = document.getElementById('instrumentlist').value;
    // send needed data to the api
    const response = await fetch('./api/tutorInstrument', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: user_id, instrument_id: instrument_id })
    });

    if(response.ok) { alert ('you have successfully added an instrument to your profile!')}
});

addCertificationButton.addEventListener("click", async function(){
    let email = localStorage.getItem('username');
    email = JSON.parse(email); 
    const apiData = await fetch(`./api/users/email/${email}`);
    const data = await apiData.json();
    const user_id = data.id;

    const certification_id = document.getElementById('certification-list').value;
    const response = await fetch('./api/tutorCertification', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: user_id, certification_id: certification_id})
    });
    if(response.ok) { alert ('you have successfully added a certification to your profile!')}
});
