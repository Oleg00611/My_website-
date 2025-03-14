setTimeout(() => {
  document.getElementById("greeting").style.opacity = "1";
}, 500);

setTimeout(() => {
  document.getElementById("greeting").style.opacity = "0";
}, 2500);

setTimeout(() => {
  document.getElementById("instruction").classList.remove("hidden");

  document.getElementById("instruction").style.opacity = "1";
}, 3000);

setTimeout(() => {
  document.getElementById("instruction").style.opacity = "0";
}, 5500);

setTimeout(() => {
  document
    .getElementById("registration-box")
    .classList.add("registration-show");
}, 6000);

function register() {
  let lastName = document.getElementById("last_name").value;

  let firstName = document.getElementById("first_name").value;

  let middleName = document.getElementById("middle_name").value;

  let birthDate = document.getElementById("birth_date").value;

  let birthTime = document.getElementById("birth_time").value;

  if (lastName && firstName && middleName && birthDate && birthTime) {
    alert("Регистрация успешна!");
  } else {
    alert("Заполните все поля!");
  }
}
