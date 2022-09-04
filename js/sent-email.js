function sendMail() {
    alert("Asdf");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append('Authorization', "Basic afc584051fa3ede2bc7c772080781feb:00eb73ebdb30bc827f87cce66a3708d1");
  
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": "epix5@inbox.lv", "Name": "Epix"},
        "To": [{"Email": "la.stepanovs@gmail.com", "Name": "Lauris"}],
        "Subject": "Order",
        "TextPart": "message"
      }]
    });
  
    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: myHeaders,
      body: data,
    };
  
    fetch("https://api.mailjet.com/v3.1/send", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      alert();
}