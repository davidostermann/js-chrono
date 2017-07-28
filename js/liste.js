
/*
var coucou = 'coucou1';

var geraldine = 'bonjour';

function play(user) {
console.log(user);
}

play('jonathan')

function stop(seconds) {
console.log(seconds)
}

stop(15)
*/
var footballPlayers = [
  'Platini',
  'Giresse',
  'Tigana',
  'Tresor',
  'Fernandez',
  'Bossis',
  'Bellone',
  'Six'
];

// console.log( footballPlayers.length);
// console.log( footballPlayers[footballPlayers.length - 1]);

var ul = document.getElementById('liste');
var result = document.getElementById('result');

console.log('result : ', result);

// boucle pour remplir le UL
for(var i=0; i < footballPlayers.length; i++) {

  // premiere methode
  // var li = document.createElement('li');
  // li.innerHTML = footballPlayers[i];
  //ul.appendChild(li);

  // deuxieme methode
  var li = '<li>'+ footballPlayers[i] + '</li>';
  ul.innerHTML = ul.innerHTML + li;
}

// fonction qui ecrit dans le p un element du tableau au hasard
function randomPlayer() {
  var r = Math.random();
  var index = Math.floor(r * 8);
  console.log( footballPlayers[index] );
  result.innerHTML = footballPlayers[index];
}
