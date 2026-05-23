var buyBtn = document.querySelector(".buy-btn");
var cartBtn = document.querySelector(".cart-btn");
var minus = document.querySelector(".minus");
var soni = document.querySelector(".soni");
var plus = document.querySelector(".plus");


plus.addEventListener("click",  function() {
    soni.textContent++
});
minus.addEventListener("click",  function() {
    soni.textContent--
});
var loading = document.querySelector(".loading");


window.addEventListener("load", function () {
    loading.classList.add("hidden");
});