function sizeLabel() {
    let medium = window.matchMedia("(min-width: 32.5em)");
    let large = window.matchMedia("(min-width: 64em)");
    if (large.matches) { // If media query matches
      
      document.getElementById('label').innerHTML="Large";
    } 
  
    else if (medium.matches){
      document.getElementById('label').innerHTML="Medium";
      
    }else{
        document.getElementById('label').innerHTML="Small";

    }
  }
  
  
  /*myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes*/
  