function carregarSugestoes() {
  let sugestoes = JSON.parse(localStorage.getItem("sugestoes")) || [];
  let lista = document.getElementById("listaSugestoes");
  lista.innerHTML = "";

  sugestoes.forEach(s => {
    let div = document.createElement("div");
    div.classList.add("sugestao");

    let arquivosHTML = "";
    if (s.arquivos && s.arquivos.length > 0) {
      arquivosHTML = "<div class='arquivos'>";
      s.arquivos.forEach(arq => {
        // Se for imagem
        if (arq.tipo.startsWith("image/")) {
          arquivosHTML += `<img src="${arq.url}" alt="Imagem" style="max-width:100%;border-radius:8px;margin:5px 0;">`;
        }
        // Se for vídeo
        else if (arq.tipo.startsWith("video/")) {
          arquivosHTML += `<video controls style="max-width:100%;border-radius:8px;margin:5px 0;">
                             <source src="${arq.url}" type="${arq.tipo}">
                           </video>`;
        }
        // Se for PDF ou outro documento
        else {
          arquivosHTML += `<a href="${arq.url}" target="_blank" style="display:block;margin:5px 0;color:#8143AB;font-weight:600;">
                             📄 ${arq.nome}
                           </a>`;
        }
      });
      arquivosHTML += "</div>";
    }

    div.innerHTML = `
      <strong>${s.titulo}</strong>
      <p>${s.descricao}</p>
      ${arquivosHTML}
    `;
    lista.appendChild(div);
  });
}

function salvarSugestao() {
  let titulo = document.getElementById("titulo").value;
  let descricao = document.getElementById("descricao").value;
  let arquivoInput = document.getElementById("arquivo");

  if (!titulo || !descricao) {
    alert("Preencha todos os campos!");
    return;
  }

  let sugestoes = JSON.parse(localStorage.getItem("sugestoes")) || [];
  let arquivos = [];

  if (arquivoInput.files.length > 0) {
    for (let i = 0; i < arquivoInput.files.length; i++) {
      let file = arquivoInput.files[i];
      let reader = new FileReader();

      reader.onload = (function (f) {
        return function (e) {
          arquivos.push({
            nome: f.name,
            tipo: f.type,
            url: e.target.result
          });

          // Quando terminar de ler todos os arquivos, salvar sugestão
          if (arquivos.length === arquivoInput.files.length) {
            sugestoes.push({ titulo, descricao, arquivos });
            localStorage.setItem("sugestoes", JSON.stringify(sugestoes));
            carregarSugestoes();

            // limpar campos
            document.getElementById("titulo").value = "";
            document.getElementById("descricao").value = "";
            arquivoInput.value = "";
          }
        };
      })(file);

      reader.readAsDataURL(file); // lê o arquivo como base64
    }
  } else {
    sugestoes.push({ titulo, descricao, arquivos });
    localStorage.setItem("sugestoes", JSON.stringify(sugestoes));
    carregarSugestoes();

    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
  }
}

window.onload = carregarSugestoes;

