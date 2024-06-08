const cardDeck = document.querySelector("#card-deck");
const instrumentList = document.querySelector('#instrumentlist')

// Function needs to be created that will retrieve tutors from local storage
// There needs to be a function created to store Tutor search list
// This will provide a way to dynamically display each card

async function createInstrumentSearch(){
    const apiData = await fetch("./api/tutors");
    var data = await apiData.json();
    console.log(data);
    let length = data.length;
    console.log(length);
 
    for(let i=0; i<data.length; i++){
        const listItem = `
        <option value="1">${data[i].firstName}</option>
        `
        instrumentList.innerHTML += listItem;
    }
}
async function createCard() {
  const apiData = await fetch("./api/tutors");
  var data = await apiData.json();
  console.log(data);
  let length = data.length;
  console.log(length);

  for(let y=0; y<data.length; y++){
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
}}