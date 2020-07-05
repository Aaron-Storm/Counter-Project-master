const counter = document.getElementById('counter');
const buttonDown = document.querySelector('.prevBtn');
const buttonUp = document.querySelector('.nextBtn');

function updateCounter(change) {
  var counterNumericValue = Number(counter.textContent)+change;
  counter.textContent = counterNumericValue;
  counter.style.color=
  (counterNumericValue>0)?"green"
  :(counterNumericValue<0)?"red"
  :"black";
}

buttonDown.addEventListener('click', function() {
  updateCounter(-1);
});

buttonUp.addEventListener('click', function() {
  updateCounter(1);
});
