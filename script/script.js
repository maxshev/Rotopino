const input = document.getElementById('input');
const textarea = document.getElementById('textarea');
const nameField = document.getElementById('name');
const messageField = document.getElementById('message');
const button = document.getElementsByTagName('a')[0];

var getScript = () => {
  let script = document.createElement('script');
  script.src = "https://smtpjs.com/v3/smtp.js"
  document.body.append(script);
  // Dodatkowe informacje, nie jest obowiązkowa
  script.onerror = function() {
    console.log("Something went wrong when we tried to load the script");
  };
  script.onload = function() {
    console.log("Script loaded and added to page");
  };
  // aby funkcja była wykonywana tylko 1 raz, można też zrobić
  // dodaс zmienną i sprawdźic, czy jest true, jeśli tak, uruchomic funkcję i na końcu przypisac jej false. Teraz zmienna jest zawsze false i funkcja nie zostanie wykonana
  // lub używając zmiennej tymczasowej... i wiele innych sposobów
  getScript = function(){};
}

var addData = () => {
  let inputValue = input.value;
  let textareaValue = textarea.value;
  nameField.innerText = inputValue;
  messageField.innerText = textareaValue;
}

// Dodatkowa funkcja nie jest obowiązkowa
var checkForm = () => {
  var isInvalid = document.querySelectorAll(':invalid');
  if (isInvalid.length === 0) {
    button.classList.remove('disabled');
  }
  else button.classList.add('disabled');
}

// Dodatkowa funkcja nie jest obowiązkowa
var clearData = () => {
  input.value = '';
  textarea.value = '';
  button.classList.add('disabled')  
}

