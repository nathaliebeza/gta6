function mensagem() {
    alert("Bem-vindo a Los Santos! Prepare-se para a aventura!");
}

function toggleMenu() {
    const menu = document.getElementById("navLinks");

    menu.classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks")
            .classList.remove("active");
    });
});