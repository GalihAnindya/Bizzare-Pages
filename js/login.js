document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("Login berhasil, selamat datang " + username + "!");
    window.location.href = "index.html";
  } else {
    document.getElementById("errorMsg").style.display = "block";
  }
});
