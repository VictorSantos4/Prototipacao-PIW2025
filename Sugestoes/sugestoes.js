// Seleciona o botão de envio
const botaoEnviar = document.querySelector('button');

// Adiciona um ouvinte de evento para o clique no botão
botaoEnviar.addEventListener('click', function(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Seleciona os campos de título e descrição
    const tituloInput = document.querySelector('input[placeholder="Título da sua sugestão"]');
    const descricaoTextarea = document.querySelector('textarea[placeholder="Descreva sua ideia..."]');

    // Obtém os valores dos campos e remove espaços em branco no início e no fim
    const titulo = tituloInput.value.trim();
    const descricao = descricaoTextarea.value.trim();

    // Verifica se o título ou a descrição estão vazios
    if (titulo === '' || descricao === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
    } else {
        // Se ambos os campos estiverem preenchidos, você pode prosseguir com o envio
        alert('Sugestão enviada com sucesso!');
        // Aqui você adicionaria a lógica para enviar os dados para o servidor
    }
});