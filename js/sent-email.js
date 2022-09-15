function sendMail() {
  const data = {
    name:"Epxi1231323 Epix",
    email:"epix5@inbox.lv",
    badget:"less than 100$123123",
    description:"want to order development123123123"
};

  fetch('http://localhost:3000/send-email', {
    method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Connection': 'keep-alive',
            'Accept': '*/*',
        },
        body: new URLSearchParams(data),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}