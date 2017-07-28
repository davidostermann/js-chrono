//alert('coucou');

function changerCouleur(c) {


  var myElement = document.getElementById('p1');
  //console.log(myElement);
  myElement.style.border = 'solid 1px black';
  //myElement.style.backgroundColor = c;

  if(myElement.style.backgroundColor == 'blue') {
    console.log('red');
    myElement.style.backgroundColor = 'red';
  } else {
    console.log('blue');
    myElement.style.backgroundColor = 'blue';
  }

}
