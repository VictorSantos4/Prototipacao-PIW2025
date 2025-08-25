// Seleciona todos os botões de aprovação
const botoesAprovar = document.querySelectorAll('.btn-approve');

// Seleciona todos os botões de rejeição
const botoesRejeitar = document.querySelectorAll('.btn-reject');

// Adiciona um ouvinte de evento de clique para cada botão de aprovação
botoesAprovar.forEach(botao => {
    botao.addEventListener('click', () => {
        // Encontra o card do comentário pai
        const cardComentario = botao.closest('.card-comment');
        
        // Simulação de ação:
        alert('Comentário aprovado!');
        
        // Exemplo de como você poderia remover o comentário da tela
        // cardComentario.remove();
        
        // Em um cenário real, aqui você enviaria uma requisição para o servidor
        // para aprovar o comentário no banco de dados.
        console.log('Comentário aprovado!');
    });
});

// Adiciona um ouvinte de evento de clique para cada botão de rejeição
botoesRejeitar.forEach(botao => {
    botao.addEventListener('click', () => {
        const cardComentario = botao.closest('.card-comment');
        
        alert('Comentário rejeitado!');
        
        // Exemplo de como você poderia remover o comentário da tela
        // cardComentario.remove();

        // Em um cenário real, aqui você enviaria uma requisição para o servidor
        // para rejeitar o comentário no banco de dados.
        console.log('Comentário rejeitado!');
    });
});