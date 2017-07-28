var chrono = document.getElementById('chrono');

var nbSeconde = 0;

function changeTime() {
  nbSeconde = nbSeconde + 1;

  var minuteAvecDecimales = nbSeconde / 60; //decimales
  var minute = Math.floor(minuteAvecDecimales); //entier
  if(minute < 10) { minute = '0' + minute } // je rajoute un 0 devant si minute est inferieur à 10

  var seconde = nbSeconde % 60; // le reste de la division
  if(seconde < 10) { seconde = '0' + seconde } // je rajoute un 0 devant si seconde est inferieur à 10
  chrono.innerHTML = minute+':'+seconde;

}

setInterval(changeTime, 1000);
