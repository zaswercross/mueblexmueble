
document.querySelector("#formLogin").addEventListener("submit", e => {
    e.preventDefault();

});

document.querySelector("#crearCuenta").addEventListener("click", e => {
    document.querySelector("body").classList.remove("body-login")
    document.querySelector("body").classList.add("body-register")
    document.querySelector("#login").classList.add("d-none")
    document.querySelector("#register").classList.remove("d-none")
    document.querySelector(".overlay").style.background = "#ECE2CF94";
    // document.querySelector(".overlay").style.background = "##46321C7A";
});

document.querySelector(".iniciarSesion").addEventListener("click", e => {
    document.querySelector("body").classList.add("body-login")
    document.querySelector("body").classList.remove("body-register")
    document.querySelector("#login").classList.remove("d-none")
    document.querySelector("#register").classList.add("d-none")
    // document.querySelector(".overlay").style.background = "#ECE2CF94";
    document.querySelector(".overlay").style.background = "#46321C7A";
});