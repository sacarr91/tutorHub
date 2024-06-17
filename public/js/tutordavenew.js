//Setting initial variables

const cardDeck = document.querySelector("#tupperware");
const instrumentList = document.querySelector("#instrumentlist");
const certificationList = document.querySelector("#certificationlist");
const interestList = document.querySelector("#interestlist");
const locationList = document.querySelector("#locationlist");

// Function to dynamically populate instrument choices from available instruments in table
async function createInstrumentSearch() {
  const apiData = await fetch("./api/instruments");
  var data = await apiData.json();
  function compareNumbers(obj1, obj2) {
    return obj1.id - obj2.id;
  }
  let instList = data.sort(compareNumbers);

  for (let i = 0; i < instList.length; i++) {
    const listItem = `
        <option value="${instList[i].instrument_name}">${instList[i].instrument_name}</option>
        `;
    instrumentList.innerHTML += listItem;
  }
}

// Function to dynamically populate certifications from our certification list
async function createCertificationSearch() {
  const apiData = await fetch("./api/certifications");
  var data = await apiData.json();
  let length = data.length;

  for (let i = 0; i < data.length; i++) {
    const listItem = `
          <option value="${data[i].certification_name}">${data[i].certification_name}</option>
          `;
    certificationList.innerHTML += listItem;
  }
}
// Function to dynamically populate specialties from our specialty list
async function createSpecialtySearch() {
  const apiData = await fetch("./api/specialty");
  var data = await apiData.json();
  let length = data.length;

  for (let i = 0; i < data.length; i++) {
    const listItem = `
          <option value="${data[i].specialty_name}">${data[i].specialty_name}</option>
          `;
    interestList.innerHTML += listItem;
  }
}

// Function creates the cards on Tutor page
const cardCreate = (data) => {
  for (let y = 0; y < data.length; y++) {
    // Variables being used in dom manipulation
    const sal = data[y].salutation ? data[y].salutation : "";
    const first = data[y].firstName;
    const surname = data[y].lastName;
    const tutorName = `${data[y].firstName}-${data[y].lastName}`;
    const avatarDisp = data[y].profile_img ? data[y].profile_img : "default";
    const specialties =
      data[y].specialties && data[y].specialties.length > 0
        ? data[y].specialties[0].specialty_name
        : "";
    const certifications =
      data[y].certifications && data[y].certifications.length > 0
        ? data[y].certifications[0].certification_name
        : "";
    const instruments =
      data[y].instruments && data[y].instruments.length > 0
        ? data[y].instruments[0].instrument_name
        : "";
    const locationRaw = data[y].lesson_setting;
    const email = data[y].email;
    const phoneNumber = data[y].phone;
    const studentJSON = localStorage.getItem("username");
    let student;
    if (studentJSON === null) {
      student = "guest";
    } else {
      student = JSON.parse(studentJSON);
    }
    const tutor = data[y].id;
    let tutorReviews =
      data[y].tutor_reviews && data[y].tutor_reviews.length > 0
        ? data[y].tutor_reviews
        : [];
    const rate = data[y].price;
    // Allowing us to populate a more user friendly response on card than is in JSON data
    if (locationRaw == "virtual") {
      tutorLocation = "Virtual";
    } else if (locationRaw == "inHome") {
      tutorLocation = "In Home";
    } else if (locationRaw == "inStudio") {
      tutorLocation = "Tutor's Studio";
    } else if (locationRaw == "hybrid") {
      tutorLocation = "Hybrid";
    } else {
      tutorLocation = "Contact Instructor";
    }

    // Creating functionality to have stars show up in card for the review rating of the tutor
    let reviewsHTML = "";

    if (tutorReviews) {
      for (let s = 0; s < tutorReviews.length; s++) {
        let starRating = "";

        if (tutorReviews[s].rating === 0) {
          starRating = `<i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`;
        } else if (tutorReviews[s].rating === 1) {
          starRating = `<i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`;
        } else if (tutorReviews[s].rating === 2) {
          starRating = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`;
        } else if (tutorReviews[s].rating === 3) {
          starRating = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`;
        } else if (tutorReviews[s].rating === 4) {
          starRating = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>`;
        } else if (tutorReviews[s].rating === 5) {
          starRating = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`;
        } else {
          starRating = "Error loading rating";
        }

        let review = tutorReviews[s].review;
        let reviewer = tutorReviews[s].student_email;

        reviewsHTML += `
                    <div class="review">
                        <div>${starRating}</div>
                        <div>${review}</div>
                        <div>By: ${reviewer}</div>
                    </div>`;
      }
    } else {
      reviewsHTML = `<div>No reviews available</div>`;
    }

    // The card itself, card was built in a HTML file and the brought over to the JS file
    const card = `
      <div class="ACTUAL-TUTOR-CARD-WITH-MARGINS-AND-PADDING card card-450 cardLayout p-3" id="${tutorName}-card">
          <div class="CONTAINER-T0-PUT-MAIN-INFO-AND-DETAILS-COLUMNS-SIDE-BY-SIDE row">
              <div class="LEFT-SIDE-OF-TUTOR-CARD col-4">
                  <img src="./assets/images/Profile-Icons/${avatarDisp}.png" class="TUTOR-CHOSEN-PROFILE-IMAGE rounded-circle shadow-1-strong my-3" style="width: 100%;" alt="Avatar">
                  <h2 class="TUTOR-NAME-FIRST-AND-LAST mb-3 open-sans-semibold-semicondensed">${sal} ${first} ${surname}</h2>
                  <h5 class="INSTRUMENTS-OFFERED-BY-TUTOR light-text mb-3">${instruments}</h5>
              </div>
              <div class="DETAILED-TUTOR-INFO-COLUMN col-8">
                  <div class="card">
                      <nav>
                          <div class="nav nav-tabs card-header p-2" style="justify-content: ene;" id="${tutorName}-tabNav" role="tablist">
                              <button class="nav-link active p-2 tutor-detail-tabs" style="max-width: 25%; font-size: 0.87rem;" id="${tutorName}-infoTab" data-bs-toggle="tab" data-bs-target="#${tutorName}-infoTabContent" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Basic Info</button>
                              <button class="nav-link p-2 tutor-detail-tabs" style="max-width: 25%; font-size: 0.87rem;" id="${tutorName}-reviewsTab" data-bs-toggle="tab" data-bs-target="#${tutorName}-reviewsTabContent" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Reviews</button>
                              <button class="nav-link p-2 tutor-detail-tabs" style="max-width: 25%; font-size: 0.87rem;" id="${tutorName}-postReviewTab" data-bs-toggle="tab" data-bs-target="#${tutorName}-postReviewTabContent" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Post Review</button>
                              <button class="nav-link p-2 tutor-detail-tabs" style="max-width: 25%; font-size: 0.87rem;" id="${tutorName}-contactTab" data-bs-toggle="tab" data-bs-target="#${tutorName}-contactTabContent" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                          </div>
                      </nav>
                      <div class="tab-content" id="${tutorName}-tabPanels">
                          <div class="tab-pane fade show active p-2" id="${tutorName}-infoTabContent" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                              <div class="SIDE-BY-SIDE-CONTAINER-LOCATION-INTERESTS row">
                                  <div class="LOCATION-OPTIONS-OFFERED col-auto" style="max-width: 50%;">
                                      <h5 class="pt-1">Location</h5>
                                      <div class="row text-muted"><p>${tutorLocation}</p></div>
                                  </div>
                                  <div class="SPECIAL-INTERESTS col border-start border-opacity-10" style="max-width: 50%;">
                                      <h5 class="pt-1">Specialties</h5>
                                      <p class="LIST-INTERESTS-HERE text-muted">${specialties}</p>
                                  </div>
                                  <div class="text-center mt-2">
                                      <div class="EXTRA-CERTIFICATIONS">
                                          <h5>Extra Certifications</h5>
                                          <p class="LIST-CERTIFICATIONS-HERE text-muted">${certifications}</p>
                                      </div>
                                      <div class="PRICE-IN-DOLLAR-SIGNS">
                                          <h5>Lesson Rate</h5>
                                          <h4 class="LINK-PRICE-DATA-HERE brush" style="color: green;">${rate}</h4>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade p-2" id="${tutorName}-reviewsTabContent" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                              <div class="TUTOR-REVIEWS-DROPDOWN accordion accordion-flush" id="${tutorName}-reviews-dropdown">
                                  <div class="accordion-item">
                                      <h4 class="accordion-header">Reviews</h4>
                                      <div id="reviewdiv">${reviewsHTML}</div>
                                  </div>
                              </div>
                          </div>
                          

                          <div class="tab-pane fade p-2" id="${tutorName}-postReviewTabContent" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                            <p class="OPTION-FOR-DETAILS-AT-TOP-OF-INFO text-muted" style="font-style: italic; font-size: smaller;"></p>
                            <div class="review-form row">
                              <form id="review-form" action="/api/postReview" method="POST">
                                <input type="text" name="user_id" class="form-control normal-text" hidden value="${tutor}" >
                                <input type="text" name="student_email" class="form-control normal-text" hidden value="${student}">
                                    <label for="reviewRating" class="form-label">Rating</label>
                                    <select name="rating" class="form-select" id="reviewRating" required>
                                      <option value="">Select a rating</option>
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                    </select>
                                    <label for="reviewText" class="form-label">Detailed Review</label>
                                    <textarea name="review"class="form-control" id="reviewText" rows="3" required></textarea>
                                <button id="next" class="btn col-6">Post Review</button>
                            </form>
                            </div>
                        </div>

                          <div class="tab-pane fade p-2" id="${tutorName}-contactTabContent" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                              <p class="OPTION-FOR-DETAILS-AT-TOP-OF-INFO text-muted" style="font-style: italic; font-size: smaller;"></p>
                              <div class="CONTACT-EMAIL-ADDRESS row">
                                  <h5 class="col-3">Email</h5>
                                  <p class="text-muted col">${email}</p>
                              </div>
                              <div class="CONTACT-PHONE-NUMBER row">
                                  <h5 class="col-3">Phone</h5>
                                  <p class="text-muted col">${phoneNumber}</p>
                              </div>
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
  cardCreate(data);
  return (allTutors = data);
}

const filterByInstrument = (tutors, instrumentChoice) => {
  tutors = allTutors;
  instrumentChoice = instrumentList.value;
  const tutorsFiltered = tutors.filter((tutors) => {
    return tutors.instruments.some(
      (instrument) => instrument.instrument_name === instrumentChoice
    );
  });
  cardDeck.innerHTML = "";
  cardCreate(tutorsFiltered);
};

const filterByCertification = (tutors, certificationChoice) => {
  tutors = allTutors;
  certificationChoice = certificationList.value;
  const tutorsFiltered = tutors.filter((tutors) => {
    return tutors.certifications.some(
      (certification) =>
        certification.certification_name === certificationChoice
    );
  });
  cardDeck.innerHTML = "";
  cardCreate(tutorsFiltered);
};

const filterBySpecialty = (tutors, specialtyChoice) => {
  tutors = allTutors;
  specialtyChoice = interestList.value;
  const tutorsFiltered = tutors.filter((tutors) => {
    return tutors.specialties.some(
      (specialty) => specialty.specialty_name === specialtyChoice
    );
  });
  cardDeck.innerHTML = "";
  cardCreate(tutorsFiltered);
};

const filterByLocation = (tutors, locationChoice) => {
  tutors = allTutors;
  locationChoice = locationList.value;
  const tutorsFiltered = tutors.filter(
    (tutor) => tutor.lesson_setting === locationChoice
  );
  cardDeck.innerHTML = "";
  cardCreate(tutorsFiltered);
};

// Code we went away from due to API payloads not presenting us complete data

//   // Displays tutors with selected instrument
//   async function getByInstrument(instrumentChoice) {
//       instrumentChoice = instrumentList.value;
//       const apiData = await fetch(`./api/tutorInstrument/${instrumentChoice}`);
//       var data = await apiData.json();
//       cardDeck.innerHTML = "";
//       cardCreate(data);
//   }

//   //Displays tutors with selected certification
//   async function getByCertification(certificationChoice) {
//     certificationChoice = certificationList.value;
//     if (certificationChoice === "0"){
//         alert("Please choose an option to search");
//         return false;
//     }
//     const apiData = await fetch(`./api/tutorCertification/${certificationChoice}`);
//     var data = await apiData.json();
//     cardDeck.innerHTML = "";
//     cardCreate(data);
// }

// //Displays tutors with selected specialty
// async function getBySpecialty(specialtyChoice) {
//     specialtyChoice = interestList.value;
//     if (specialtyChoice === "0"){
//         alert("Please choose an option to search");
//         return false;
//     }
//     const apiData = await fetch(`./api/tutorSpecialty/${specialtyChoice}`);
//     var data = await apiData.json();
//     cardDeck.innerHTML = "";
//     cardCreate(data);
// }

// //Displays tutors with preferred location choice
// async function getByLocation(locationChoice) {
//     locationChoice = locationList.value;
//     if (locationChoice === "0"){
//         alert("Please choose an option to search");
//         return false;
//     }
//     const apiData = await fetch(`./api/tutorLocation/${locationChoice}`);
//     var data = await apiData.json();
//     cardDeck.innerHTML = "";
//     cardCreate(data);
// }
