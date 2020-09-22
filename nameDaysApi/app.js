console.log("My next API call!");

const displayName = (json) => {
  const nameElm = document.querySelector('#name');
  nameElm.textContent = json.data.namedays.cz;
};
  
fetch('https://api.abalin.net/today?country=cz')
  .then((resp) => resp.json())
  .then(displayName);