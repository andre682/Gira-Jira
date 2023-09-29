
function startRotation(rotation) {
  intervalId = setInterval(function () {
    rotation += 5;
    document.body.style.transform = "rotate(" + rotation + "deg)";
    document.body.style.webkitTransform = 'rotate(' + deg + 'deg)';
    document.body.style.mozTransform = 'rotate(' + deg + 'deg)';
    document.body.style.msTransform = 'rotate(' + deg + 'deg)';
    document.body.style.oTransform = 'rotate(' + deg + 'deg)';
  }, 50);
}

function stopRotation() {
  clearInterval(intervalId);
  document.body.style.transform = "";
}

if (typeof intervalId == 'undefined') {
  console.log(1)
  let intervalId = null
  startRotation(0);
} else {
  console.log(2)
  stopRotation();
  intervalId = undefined;
}
// console.log(document)
// console.log(document.getElementById("start"))


// /*
// function rotateScreen() {
//   if (rotating) {
//     rotating = false;
//      document.querySelector('body').style.webkitTransform = 'rotate('+deg+'deg)';
//     document.querySelector('body').style.mozTransform    = 'rotate('+deg+'deg)';
//     document.querySelector('body').style.msTransform     = 'rotate('+deg+'deg)';
//     document.querySelector('body').style.oTransform      = 'rotate('+deg+'deg)';
//     document.querySelector('body').style.transform       = 'rotate('+deg+'deg)';
//     document.querySelector('#start').textContent = 'Começar a girar';
//   } else {
//     rotating = true;
//     document.querySelector('body').style.transform = 'rotate(180deg)';
//      document.querySelector('body').style.webkitTransform = 'rotate('+deg+'deg)';
//     document.querySelector('body').style.mozTransform    = 'rotate('+deg+'deg)';
//     document.querySelector('body').style.msTransform     = 'rotate('+deg+'deg)';
//     document.querySelector('body').style.oTransform      = 'rotate('+deg+'deg)';
//     document.querySelector('body').style.transform       = 'rotate('+deg+'deg)';
//     document.querySelector('#start').textContent = 'Parar de girar';
//   }
// }

// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('#start').addEventListener('click', rotateScreen);
// });
// */
