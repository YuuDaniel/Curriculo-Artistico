document.addEventListener("DOMContentLoaded", function () {
    const premio = document.querySelector(".premio");

    // Criar o tooltip dinamicamente
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerHTML = `Prêmio pelo Jornal O Globo de destaque para os melhores do Carnaval, reconhecendo excelência e inovação. 
    <a href="https://memoria.oglobo.globo.com/institucional/promocoes/estandarte-de-ouro-9261327" target="_blank" style="color: yellow; text-decoration: underline;">Saiba mais</a>`;
    document.body.appendChild(tooltip);

    // Exibir tooltip ao passar o mouse
    premio.addEventListener("mouseenter", function () {
        const rect = premio.getBoundingClientRect();
        tooltip.style.display = "block";
        tooltip.style.left = rect.left + "px";
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + "px"; // Posiciona acima do elemento
    });

    // Esconder tooltip ao sair do elemento e do próprio tooltip
    premio.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!tooltip.matches(":hover") && !premio.matches(":hover")) {
                tooltip.style.display = "none";
            }
        }, 300); // Pequeno atraso para permitir o clique
    });

    tooltip.addEventListener("mouseleave", function () {
        tooltip.style.display = "none";
    });
});
