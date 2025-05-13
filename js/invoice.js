const params = new URLSearchParams(window.location.search);
document.getElementById("nama").textContent = params.get("name");
document.getElementById("alamat").textContent = params.get("address");
document.getElementById("book").textContent = params.get("book");
document.getElementById("price").textContent = parseInt(params.get("price")).toLocaleString();
document.getElementById("volume").textContent = params.get("volume");
document.getElementById("payment").textContent = params.get("payment");
