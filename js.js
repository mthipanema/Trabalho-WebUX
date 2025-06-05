
console.log("Página carregada com sucesso!");

document.addEventListener("DOMContentLoaded", function () {
    const escudos = document.querySelectorAll("table img");

    escudos.forEach(img => {
        img.addEventListener("click", function () {
            alert("Você clicou no escudo do " + this.alt + "!");
        });
    });
});
