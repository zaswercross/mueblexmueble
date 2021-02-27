if (sessionStorage.getItem("login") == 1) {
    document.querySelector(".home-seccion").classList.remove("d-none")
    document.querySelector(".wellcome-section").classList.remove("d-none")
    document.querySelector(".chat-section").classList.add("d-none")
    document.querySelector(".body-login").classList.add("d-none")
    document.querySelector("#login").classList.add("d-none")
    document.querySelector("#register").classList.add("d-none")
} else {
    document.querySelector(".home-seccion").classList.add("d-none")
    document.querySelector(".wellcome-section").classList.add("d-none")
    document.querySelector(".chat-section").classList.add("d-none")
    document.querySelector(".body-login").classList.remove("d-none")
    document.querySelector("#login").classList.remove("d-none")
    document.querySelector("#register").classList.add("d-none")
}
document.querySelector("#formLogin").addEventListener("submit", e => {
    e.preventDefault();
    sessionStorage.setItem("login", 1);
    document.querySelector(".home-seccion").classList.remove("d-none")
    document.querySelector(".wellcome-section").classList.remove("d-none")
    document.querySelector(".chat-section").classList.add("d-none")
    document.querySelector(".body-login").classList.add("d-none")
    document.querySelector("#login").classList.add("d-none")
    document.querySelector("#register").classList.add("d-none")
    $(".dropdown-menu").removeClass("show")
});
document.querySelector("#formRegister").addEventListener("submit", e => {
    e.preventDefault();
    sessionStorage.setItem("login", 1);
    document.querySelector(".home-seccion").classList.remove("d-none")
    document.querySelector(".wellcome-section").classList.remove("d-none")
    document.querySelector(".chat-section").classList.add("d-none")
    document.querySelector(".body-login").classList.add("d-none")
    document.querySelector("#login").classList.add("d-none")
    document.querySelector("#register").classList.add("d-none")
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

const buttonsDrops = document.querySelectorAll(".dropdown-toggler");

for (let index = 0; index < buttonsDrops.length; index++) {
    const element = buttonsDrops[index];
    element.addEventListener("click", e => {

        console.log($(e.target).parent().children(".dropdown-menu"))
        if (e.target.parentElement.children[3].classList.contains("show")) {
            $(e.target).parent().children(".dropdown-menu").removeClass("show")
            return false;
        } else {
            $(e.target).parent().children(".dropdown-menu").addClass("show")
            return false;
        }
    })
}

const salirButtons = document.querySelectorAll(".salir");

for (let index = 0; index < salirButtons.length; index++) {
    const element = salirButtons[index];
    element.addEventListener("click", e => {
        sessionStorage.setItem("login", 0);
        document.querySelector(".home-seccion").classList.add("d-none")
        document.querySelector(".wellcome-section").classList.add("d-none")
        document.querySelector(".chat-section").classList.add("d-none")
        document.querySelector(".body-login").classList.remove("d-none")
        document.querySelector("#login").classList.remove("d-none")
        document.querySelector("#register").classList.add("d-none")
        $(".dropdown-menu").removeClass("show")
    })
}
const homeButtons = document.querySelectorAll(".home");

for (let index = 0; index < homeButtons.length; index++) {
    const element = homeButtons[index];
    element.addEventListener("click", e => {
        sessionStorage.setItem("login", 0);
        $(".dropdown-menu").removeClass("show")
        document.querySelector(".home-seccion").classList.remove("d-none")
        document.querySelector(".wellcome-section").classList.remove("d-none")
        document.querySelector(".chat-section").classList.add("d-none")
        document.querySelector(".body-login").classList.add("d-none")
        document.querySelector("#login").classList.add("d-none")
        document.querySelector("#register").classList.add("d-none")
    })
}

document.querySelector(".chat-active").addEventListener("click", e => {
    $(".dropdown-menu").removeClass("show")
    document.querySelector(".home-seccion").classList.remove("d-none")
    document.querySelector(".wellcome-section").classList.add("d-none")
    document.querySelector(".chat-section").classList.remove("d-none")
    document.querySelector(".body-login").classList.add("d-none")
    document.querySelector("#login").classList.add("d-none")
    document.querySelector("#register").classList.add("d-none")
})

document.getElementById("chatMessages").addEventListener("submit", e => {
    e.preventDefault();
    console.log(horaActual());
    let msg = document.getElementById("inputValid").value;
    let messg = `
    <div class="msg-send">
    <small class="chat-msg">${msg}</small>
    <small class="chat-time">${horaActual()}</small>
</div>`;
    $(".container-chats").append(messg)
    document.getElementById("inputValid").value = '';
})