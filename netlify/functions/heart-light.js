const fetch = require('node-fetch');

exports.handler = async () => {
  const url = 'https://maker.ifttt.com/trigger/heart_light/with/key/your_key_goes_here'; // change this!
  const response = await fetch(url);

  const text = await response.text();
  console.log(response.status, text);

  if (response.ok) {
    return { statusCode: 200, body: 'Success!' };
  } else {
    return { statusCode: 500, body: 'Error.' };
  }
}
