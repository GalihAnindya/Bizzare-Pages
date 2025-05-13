document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Registrasi berhasil! Silakan login.");
  window.location.href = "login.html";
});
