console.log("My next API call!");

const displayName = (json) => {
  const nameElm = document.querySelector('#name');
  nameElm.textContent = json.data.namedays.cz;
};
  
fetch('https://api.abalin.net/today?country=cz')
  .then((resp) => resp.json())
  .then(displayName);

const highlight = () => {
  const highlightsArray = document.querySelectorAll(".highlight");
  const numberOfHighlights = highlightsArray.length;
  for(var i = 0; i < numberOfHighlights; i++) {
    const chooseElem = highlightsArray[i]
    chooseElem.classList.add("hasData");
  }
}

const getResultOfDatetimePlace = (json) => {
  const day = document.getElementById("dateDay").value;
  const month = document.getElementById("dateMonth").value;
  const country = document.getElementById("country").value;
  const dateTimeString = `${day}. ${month}.`;

  document.getElementById("selectedDate").innerText = dateTimeString;
  document.getElementById("selectedCountry").innerText = country;

  const displayRequestName = (json) => {
    const nameElm = document.querySelector('#resultName');
    nameElm.textContent = json.data.namedays[country];
  };

  const fetchString = `https://api.abalin.net/namedays?country=${country}&month=${month}&day=${day}`;

  highlight();

  fetch(fetchString)
  .then((resp) => resp.json())
  .then(displayRequestName)
}

document.getElementById("actionTrigger").addEventListener("click", function(){
  getResultOfDatetimePlace();
}); 

//https://api.abalin.net/namedays?country=cz&month=2&day=13