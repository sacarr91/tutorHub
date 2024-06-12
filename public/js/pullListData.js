const instrumentList = document.querySelector("#instrumentlist");
const 

// Pull Instrument List
async function pullInstrumentData() {
    const apiData = await fetch("./api/instruments");
    const data = await apiData.json();
    
    for (let i = 0; i < data.length; i++) {

      const listItem = `<option value="${data[i].id}">${data[i].instrument_name}</option>`;
      instrumentList.innerHTML += listItem;
    }
  }

  // Pull Certification list
  async function pullCertData() {
    const apiData = await fetch("./api/certifications");
    const data = await apiData.json();
    
    for (let i = 0; i < data.length; i++) {

      const listItem = `<option value="${data[i].id}">${data[i].certificate_name}</option>`;
      instrumentList.innerHTML += listItem;
    }
  }

