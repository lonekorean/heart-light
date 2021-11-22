document.querySelector('button').addEventListener('click', ping);

function ping() {
  fetch('/.netlify/functions/heart-light');
}
