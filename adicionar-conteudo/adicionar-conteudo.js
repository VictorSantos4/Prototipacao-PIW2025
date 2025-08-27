document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const categoria = document.getElementById("categoria");
  const imagem = document.getElementById("imagem");

  // Cria mensagens de erro dinâmicas
  const msgErroCategoria = document.createElement("small");
  msgErroCategoria.classList.add("msg-erro");
  categoria.insertAdjacentElement("afterend", msgErroCategoria);

  const msgErroImagem = document.createElement("small");
  msgErroImagem.classList.add("msg-erro");
  imagem.parentElement.insertAdjacentElement("afterend", msgErroImagem);

  // 🔹 Função de validação
  function validarCampo(campo) {
    if (campo === categoria) {
      if (categoria.value === "Selecione uma categoria") {
        categoria.classList.add("erro");
        msgErroCategoria.textContent = "Selecione ao menos uma categoria.";
      } else {
        categoria.classList.remove("erro");
        msgErroCategoria.textContent = "";
      }
    }

    if (campo === imagem) {
      if (imagem.files.length === 0) {
        imagem.parentElement.classList.add("erro");
        msgErroImagem.textContent = "Selecione pelo menos um arquivo para continuar.";
      } else {
        imagem.parentElement.classList.remove("erro");
        msgErroImagem.textContent = "";
      }
    }
  }

  // Validação no submit
  form.addEventListener("submit", function (e) {
    let valido = true;

    if (categoria.value === "Selecione uma categoria") {
      categoria.classList.add("erro");
      msgErroCategoria.textContent = "Selecione ao menos uma categoria.";
      valido = false;
    }

    if (imagem.files.length === 0) {
      imagem.parentElement.classList.add("erro");
      msgErroImagem.textContent = "Envie uma imagem para continuar.";
      valido = false;
    }

    if (!valido) {
      e.preventDefault();
    }
  });

  // Eventos em tempo real
  categoria.addEventListener("change", () => validarCampo(categoria));
  imagem.addEventListener("change", () => validarCampo(imagem));
});
    