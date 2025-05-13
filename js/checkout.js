const params = new URLSearchParams(window.location.search);
const book = params.get("book");
const price = params.get("price");

document.getElementById("bookTitle").textContent = book;
document.getElementById("book").value = book;
document.getElementById("price").value = price;

document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const volume = document.getElementById("volume").value;
  const payment = document.getElementById("payment").value;

  const query = `name=${encodeURIComponent(name)}&address=${encodeURIComponent(address)}&book=${encodeURIComponent(book)}&price=${encodeURIComponent(price)}&volume=${volume}&payment=${encodeURIComponent(payment)}`;
  window.location.href = `invoice.html?${query}`;
});
