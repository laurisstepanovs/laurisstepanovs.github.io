const form = document.getElementById("hireMeForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  sendMail()
});

function sendMail() {
  const data = {
    name: document.getElementById("name").value,
    email:document.getElementById("email").value,
    badget: document.getElementById("budget").value,
    description: document.getElementById("description").value,
};

  fetch('https://personal-partfolio.herokuapp.com/send-email', {
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
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("budget").value = "";
      document.getElementById("description").value = "";
      alert("Email has been successfully sent!");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}