const addInstrumentButton = document.getElementById('addInstrument');

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

    if(response.ok) { alert ('you have successfully added an instrument')}

});