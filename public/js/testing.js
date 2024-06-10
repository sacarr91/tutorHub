async function getTutors(){
    const apiData = await fetch ('./api/tutors');
    var data = await apiData.json();
    console.log(data);
}