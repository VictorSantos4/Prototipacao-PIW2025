document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.querySelector("#titulo");
    const descInput = document.querySelector("#descricao");
    const sendBtn = document.querySelector("#enviarSugestao");
    const suggestionsList = document.querySelector("#listaSugestoes");

    // Carregar sugestões salvas
    let sugestoes = JSON.parse(localStorage.getItem("sugestoes")) || [];
    renderSugestoes();

    // Função para renderizar as sugestões na tela
    function renderSugestoes() {
        suggestionsList.innerHTML = "";
        sugestoes.forEach((sugestao, index) => {
            const item = document.createElement("div");
            item.classList.add("sugestao");

            item.innerHTML = `
                <div>
                    <strong>${sugestao.titulo}</strong>
                    <p>${sugestao.descricao}</p>
                    <small>Por: ${sugestao.autor}</small>
                </div>
                <div class="acoes">
                    <button class="votar">👍 ${sugestao.votos}</button>
                    <button class="excluir">🗑</button>
                </div>
            `;

            // Botão de votar
            item.querySelector(".votar").addEventListener("click", () => {
                sugestoes[index].votos++;
                salvarSugestoes();
                renderSugestoes();
            });

            // Botão de excluir
            item.querySelector(".excluir").addEventListener("click", () => {
                sugestoes.splice(index, 1);
                salvarSugestoes();
                renderSugestoes();
            });

            suggestionsList.appendChild(item);
        });
    }

    // Função para salvar no navegador
    function salvarSugestoes() {
        localStorage.setItem("sugestoes", JSON.stringify(sugestoes));
    }

    // Evento do botão Enviar
    sendBtn.addEventListener("click", () => {
        const titulo = titleInput.value.trim();
        const descricao = descInput.value.trim();

        if (titulo === "" || descricao === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Criar sugestão
        const novaSugestao = {
            titulo: titulo,
            descricao: descricao,
            autor: "Você",
            votos: 0
        };

        sugestoes.push(novaSugestao);
        salvarSugestoes();
        renderSugestoes();

        // Limpar campos
        titleInput.value = "";
        descInput.value = "";

        const voltarBtn = document.querySelector("#voltarBtn");
if (voltarBtn) {
    voltarBtn.addEventListener("click", () => {
        window.history.back();
    });
}

    });
});
