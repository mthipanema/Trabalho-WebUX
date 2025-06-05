// Mensagem de boas-vindas no console
console.log("Página carregada com sucesso!");

// Adiciona evento para alertar o nome do time ao clicar no escudo
document.addEventListener("DOMContentLoaded", function () {
    const escudos = document.querySelectorAll("table img");

    escudos.forEach(img => {
        img.addEventListener("click", function () {
            alert("Você clicou no escudo do " + this.alt + "!");
        });
    });
});
 <script src="script.js"></script>