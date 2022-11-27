const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(__dirname + '/img'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/info', (request, response) => {
  response.send(request.body);
})

const PORT = 8000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

/*document.getElementById("myBtn").addEventListener("click", sendMail);

function sendMail(name, email, subject, message) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.set('Authorization', 'Basic ' + base64.encode('<API Key>'+":" +'<Secret Key>'));

  const data = JSON.stringify({
    "Messages": [{
      "From": {"Email": "<YOUR EMAIL>", "Name": "<YOUR NAME>"},
      "To": [{"Email": email, "Name": name}],
      "Subject": subject,
      "TextPart": message
    }]
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
  };

  fetch("https://api.mailjet.com/v3.1/send", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}*/