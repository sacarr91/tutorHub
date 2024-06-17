const instrumentList = document.querySelector("#instrumentlist");
const certificationList = document.querySelector("#certification-list");
const specialtyList = document.querySelector("#specialty-list");
const linkPlatformList = document.querySelector("#platform-list");

// Pull Instrument List
async function pullInstrumentData() {
    const apiData = await fetch("./api/instruments");
    const data = await apiData.json();
    
    for (let i = 0; i < data.length; i++) {

      const listItem = `<option value="${data[i].id}">${data[i].instrument_name}</option>`;
      instrumentList.innerHTML += listItem;
    };
  };

  // Pull Certification list
  async function pullCertData() {
    const apiData = await fetch("./api/certifications");
    const data = await apiData.json();
    
    for (let i = 0; i < data.length; i++) {

      const listItem = `<option value="${data[i].id}">${data[i].certification_name}</option>`;
      certificationList.innerHTML += listItem;
    };
  };

    // Pull Specialty list
    async function pullSpecialtyData() {
      const apiData = await fetch("./api/specialty");
      const data = await apiData.json();
      
      for (let i = 0; i < data.length; i++) {
  
        const listItem = `<option value="${data[i].id}">${data[i].specialty_name}</option>`;
        specialtyList.innerHTML += listItem;
      };
    };

    // Pull Link Platform list
    async function pullLinkPlatform() {
      const apiData = await fetch("./api/linkPlatform");
      const data = await apiData.json();

      for (let i = 0; i < data.length; i++) {
        const listItem = `<option value="${data[i].id}">${data[i].platform_name}</option>`;
        linkPlatformList.innerHTML += listItem;
      };
    }; 

