// https://www.omnicalculator.com/conversion/cubic-inches-to-gallons

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gallonsRadio = document.getElementById('gallonsRadio');
const cubicinchesRadio = document.getElementById('cubicinchesRadio');

let gallons;
let cubicinches = v; 

// labels of the inpust
const variable = document.getElementById('variable');

gallonsRadio.addEventListener('click', function() {
  variable.textContent = 'Cubic inches';
  cubicinches = v;
  result.textContent = '';
});

cubicinchesRadio.addEventListener('click', function() {
  variable.textContent = 'Gallons';
  gallons = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gallonsRadio.checked)
    result.textContent = `Gallons = ${computegallons().toFixed(5)}`;

  else if(cubicinchesRadio.checked)
    result.textContent = `Cubic inches = ${computecubicinches().toFixed(5)}`;
})

// calculation

function computegallons() {
  return Number(cubicinches.value) / 231;
}

function computecubicinches() {
  return Number(gallons.value) * 231;
}