function ping() {
  console.log('button clicked!');
  fetch('/.netlify/functions/heart-light');
}

document.querySelector('button').addEventListener('click', ping);
