const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let image =document.createElement('img');

        h2.textContent = towns[i].name;
        h4.textContent = towns[i].motto;
        
        p.textContent =  'Year founded:' + towns[i].yearFounded + ' ' + 'Population: ' + towns[i].currentPopulation + " " + 
        'averageRainfall: ' + towns[i].averageRainfall + ' ';
        //creo el path de la imagen, para luego configurar el atributo src
        let src =`img/${towns[i].photo}`;//very importan
        image.setAttribute('src', src);
        image.setAttribute('alt',"photo " + towns[i].name);

        card.appendChild(h2);
        card.appendChild(h4);
        card.appendChild(p);
        card.appendChild(image);

        document.querySelector('div.towns').appendChild(card);
}
  });
 