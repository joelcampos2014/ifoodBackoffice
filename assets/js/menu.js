const button = document.querySelector(".toggle-btn");

button.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("expand");
});
