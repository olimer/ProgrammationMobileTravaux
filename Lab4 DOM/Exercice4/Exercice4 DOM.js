var X = document.getElementById("PosX");
var Y = document.getElementById("PosY");

document.addEventListener('mousemove', function(e) {X.innerHTML = 'Position de la souris en  X ' + e.clientX},false);
document.addEventListener('mousemove', function(e) {Y.innerHTML = 'Position de la souris en Y ' + e.clientY},false);