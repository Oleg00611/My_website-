width: 100px;

  height: 100px;

  background: gray;

  border-radius: 50%;

  margin: auto;
}

.edit-btn,
.add-btn {
  background: #ff1493;

  color: white;

  border: none;

  padding: 10px;

  border-radius: 5px;

  cursor: pointer;
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("welcome-screen").style.display = "none";

    document.getElementById("registration").classList.remove("hidden");
  }, 4000);
});

function register() {
  const fullname = document.getElementById("fullname").value;

  const name = document.getElementById("name").value;

  const patronymic = document.getElementById("patronymic").value;

  const birthDate = document.getElementById("birth_date").value;

  const birthTime = document.getElementById("birth_time").value;

  const fullNameString = `${fullname} ${name} ${patronymic}`;

  // Сохранение данных

  localStorage.setItem("fullname", fullNameString);

  localStorage.setItem("birthDate", birthDate);

  localStorage.setItem("birthTime", birthTime);

  // Переход на страницу профиля

  window.location.href = "profile.html";
}

// Отображение данных в профиле

window.onload = function () {
  if (document.getElementById("username")) {
    document.getElementById("username").textContent =
      localStorage.getItem("fullname") || "Имя пользователя";
  }
};
