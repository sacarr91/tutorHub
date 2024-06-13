const cardDeck = document.querySelector("#card-deck");
const instrumentList = document.querySelector("#instrumentlist");
const certificationList = document.querySelector("#certificationlist");
const interestList = document.querySelector("#interestlist");


// Function to dynamically populate instrument choices from available instruments in table
async function createInstrumentSearch() {
    const apiData = await fetch("./api/instruments");
    const data = await apiData.json();

  for (let i = 0; i < data.length; i++) {
    const listItem = `
        <option value="${data[i].instrument_name}">${data[i].instrument_name}</option>
        `;
    instrumentList.innerHTML += listItem;
  }
}
async function createCertificationSearch() {
    const apiData = await fetch("./api/certifications");
    var data = await apiData.json();
    console.log(data);
    let length = data.length;
    console.log(length);
  
    for (let i = 0; i < data.length; i++) {
      const listItem = `
          <option value="${data[i].certification_name}">${data[i].certification_name}</option>
          `;
      certificationList.innerHTML += listItem;
    }
  }
  async function createSpecialtySearch() {
    const apiData = await fetch("./api/specialty");
    var data = await apiData.json();
    console.log(data);
    let length = data.length;
    console.log(length);
  
    for (let i = 0; i < data.length; i++) {
      const listItem = `
          <option value="${data[i].specialty_name}">${data[i].specialty_name}</option>
          `;
      interestList.innerHTML += listItem;
    }
  }

const cardCreate = (data) => {
  for (let y = 0; y < data.length; y++) {
    const card = `<div class="col-12 col-md-6 col-lg-4">
                  <div class="card mb-2">
                      <div class="row g-4">
                          <div class="col-md-4">
                              <img
                                  src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                                  class="rounded-circle shadow-1-strong my-5"
                                  style="width: 80px;"
                                  alt="Avatar"
                              >
                                  <h5>${data[y].firstName} ${data[y].lastName}</h5>
                                  <p style="font-style: italic;"></p>
                                  <p>${data[y].region}</p>
                                  <i class="far fa-edit mb-2"></i>
                          </div>
                          <div class="col-md-8">
                              <h6>Contact Info:</h6>
                              <hr class="mt-0 mb-4">
                                  <div class="row pt-2">
                                      <div class="col-6 mb-3">
                                          <h6>Email</h6>
                                          <p class="text-muted">${data[y].email}</p>
                                      </div>
                                      <div class="col-6 mb-3">
                                          <h6>Phone:</h6>
                                          <p class="text-muted">${data[y].phone}</p>
                                      </div>
                                  </div>
                                  <h6>Specialties:</h6>
                                  <hr class="mt-0 mb-4">
                                      <div class="row pt-1">
                                          <div class="col-6 mb-3">
                                              <h6>Instruments</h6>
                                              <p class="text-muted">${data[y].instruments}</p>
                                          </div>
                                          <div class="col-6 mb-3">
                                              <h6>Tutoring location:</h6>
                                              <p class="text-muted">${data[y].virtual}</p>
                                          </div>
                                      </div>
                                  </div>
                          </div>
                      </div>
                  </div>`;
    cardDeck.innerHTML += card;
  }
};

// Displays all tutor cards
async function createAllTutors() {
  const apiData = await fetch("./api/tutors");
  var data = await apiData.json();
  console.log(data);
  let length = data.length;
  console.log(length);
  cardCreate(data);
}

async function getByInstrument(instrumentChoice) {
    instrumentChoice = instrumentList.value; 
    if (instrumentChoice === "0"){
        alert("Please choose an option to search");
        return false;
    }
    const apiData = await fetch(`./api/tutorInstrument/${instrumentChoice}`);
    var data = await apiData.json();
    let length = data.length;
    cardDeck.innerHTML = "";
    cardCreate(data);
}

async function getByCertification(certificationChoice) {
    certificationChoice = certificationList.value; 
    if (certificationChoice === "0"){
        alert("Please choose an option to search");
        return false;
    }
    const apiData = await fetch(`./api/tutorCertification/${certificationChoice}`);
    var data = await apiData.json();
    let length = data.length;
    cardDeck.innerHTML = "";
    cardCreate(data);
}

async function getBySpecialty(specialtyChoice) {
    specialtyChoice = interestList.value; 
    if (specialtyChoice === "0"){
        alert("Please choose an option to search");
        return false;
    }
    const apiData = await fetch(`./api/tutorSpecialty/${specialtyChoice}`);
    var data = await apiData.json();
    let length = data.length;
    cardDeck.innerHTML = "";
    cardCreate(data);
}