const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    const towns = jsonObject['towns'];
    let c =0;//contador parea saber si una imagen le corresponde numero 'par' o no
             //no puedo usar la 'i' porque no voy a usar todas las imagenes sino solo tres
    for (let i = 0; i < towns.length; i++ ) {
         if (towns[i].name =="Fish Haven" || towns[i].name =="Preston" || towns[i].name =="Soda Springs"){
            let card = document.createElement('section');
            let contenedor = document.createElement('div');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let p = document.createElement('p');
            let image =document.createElement('img');

            h2.textContent = towns[i].name;
            h4.textContent = towns[i].motto;
            
            p.textContent =  'Year founded:' + towns[i].yearFounded + ' ' + 'Population: ' + towns[i].currentPopulation + " " + 
            'averageRainfall: ' + towns[i].averageRainfall + ' ';
            //creó el path de la imagen, para luego configurar el atributo src
            let src =`img/${towns[i].photo}`;//very importan
            image.setAttribute('src', src);
            image.setAttribute('alt',"photo " + towns[i].name);
            image.setAttribute('class', "left");
          

          contenedor.appendChild(h2);
          contenedor.appendChild(h4);
          contenedor.appendChild(p);
          card.appendChild(contenedor);
            card.appendChild(image);
            card.setAttribute('class',"town");// creo una clase para usarla en el grid
            contenedor.setAttribute('class', "data");// para usar para que cambie a la derecha o izquierda
            if(c%2==0){
                image.setAttribute('class', "derecha");
                contenedor.setAttribute('class', "data2");

            }
            c++;
            document.querySelector('div.towns').appendChild(card);
      }
    }
  });
 