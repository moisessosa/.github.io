function getDirectory(){
 const curl = 'json/business.json';
 fetch(curl)
 .then(function (response) {
     return response.json();
 })
 .then(function (jsonObject) {
     
     const business = jsonObject["business"];
     console.log(business);
     for(let i=0;i < business.length; i++){
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pcontact = document.createElement('p');
        let image =document.createElement('img');
        let pweb = document.createElement('p');
        let a = document.createElement('a');
        h2.textContent = business[i].name;
        pcontact.textContent = "Contact informaton: "+business[i].contactInformation;
        pweb.textContent ="Site: "+ business[i].web;
        let src = "img/"+ business[i].logo + '.png';
        image.setAttribute('src', src);
        image.setAttribute('alt',"photo " + business[i].logo);
        
        card.appendChild(h2);
        card.appendChild(pcontact);
        card.appendChild(image);
        card.appendChild(pcontact);
        card.appendChild(a)
        a.appendChild(pweb)
        if(business[i].web!="no have"){
            a.setAttribute('href', business[i].web)
        }
        //card.appendChild(pweb);

        document.querySelector('div.cards').appendChild(card);
     }
    
    
 });

}