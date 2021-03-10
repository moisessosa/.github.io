const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=4b8335036073eddbe43ccf6d59157d39";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const preston = jsObject;
    document.getElementById('current-temp').textContent = preston.main.temp;
    document.getElementById("like").innerHTML=preston.main.feels_like;
    const imagesrc = 'https://openweathermap.org/img/w/' + preston.weather[0].icon + '.png';  // note the concatenation
    const desc = preston.weather[0].description;  // note how we reference the weather array
    document.getElementById('des').textContent = desc;
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

  });