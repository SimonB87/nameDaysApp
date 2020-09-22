console.log("My next API call!");

const displayName = (json) => {
  const nameElm = document.querySelector('#name');
  nameElm.textContent = json.data.namedays.cz;
};
  
fetch('https://api.abalin.net/today?country=cz')
  .then((resp) => resp.json())
  .then(displayName);

const getResultOfDatetimePlace = (data) => {
  const day = document.getElementById("dateDay").value;
  const month = document.getElementById("dateMonth").value;
  const dateTimeString = `${day}. ${month}.`;
  document.getElementById("selectedDate").innerText = dateTimeString;

  document.getElementById("selectedCountry").innerText = document.getElementById("country").value;
}

//https://api.abalin.net/namedays?country=cz&month=2&day=13