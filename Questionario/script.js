document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("questionario");
  
    // Tela do questionário
    if (form) {
      const botao = document.querySelector(".next");
  
      botao.addEventListener("click", (e) => {
        e.preventDefault();
  
        const respostasSelecionadas = [];
        document.querySelectorAll("input[name='sentimentos']:checked").forEach((el) => {
          respostasSelecionadas.push(el.value);
        });
  
        if (respostasSelecionadas.length === 0) {
          alert("Por favor, selecione pelo menos uma opção.");
          return;
        }
  
        // Data de hoje (AAAA-MM-DD)
        const hoje = new Date().toISOString().split("T")[0];
  
        // Carregar histórico existente
        let historico = JSON.parse(localStorage.getItem("historico")) || [];
  
        // Verificar se já existe entrada para hoje
        const entradaHoje = historico.find((item) => item.data === hoje);
        if (entradaHoje) {
          entradaHoje.respostas.push(...respostasSelecionadas);
        } else {
          historico.push({
            data: hoje,
            respostas: respostasSelecionadas
          });
        }
  
        // Salvar de volta
        localStorage.setItem("historico", JSON.stringify(historico));
  
        // Ir para histórico
        window.location.href = "historico.html";
      });
    }
  
    // Tela de histórico
    const container = document.getElementById("historico-container");
    if (container) {
      const historico = JSON.parse(localStorage.getItem("historico")) || [];
  
      if (historico.length === 0) {
        container.innerHTML = "<p>Nenhuma resposta registrada ainda.</p>";
      } else {
        historico.forEach((registro) => {
          const card = document.createElement("div");
          card.className = "card";
  
          const titulo = document.createElement("h3");
          titulo.textContent = new Date(registro.data).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
          });
  
          const lista = document.createElement("ul");
          registro.respostas.forEach((resp) => {
            const li = document.createElement("li");
            li.textContent = resp;
            lista.appendChild(li);
          });
  
          card.appendChild(titulo);
          card.appendChild(lista);
          container.appendChild(card);
        });
      }
    }
  });
  