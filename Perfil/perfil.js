  document.addEventListener('DOMContentLoaded', function() {
            const grafico = document.getElementById('graficoProgresso');
            
            // Simular animação de carregamento
            setTimeout(() => {
                grafico.style.width = '70%';
            }, 500);
            
            // Dados dinâmicos (poderiam vir de uma API)
            const dadosProgresso = {
                dias: 14,
                minutos: 210,
                sequencia: 5
            };
            
            // Atualizar dados periodicamente (simulação)
            setInterval(() => {
                // Simular pequenas mudanças nos dados
                document.querySelector('td:nth-child(1)').textContent = dadosProgresso.dias;
                document.querySelector('td:nth-child(2)').textContent = dadosProgresso.minutos;
                document.querySelector('td:nth-child(3)').textContent = dadosProgresso.sequencia;
            }, 5000);
        });