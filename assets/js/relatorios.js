const salesChart = document.getElementById('sales-chart');

new Chart(melhoresProdutos, {
    type: 'bar',
    data: {
        labels: ['Parmegiana', 'Bife a role', 'Feijoada', 'Strogonoff', 'Hamburguer', 'Filé de frango', 'Picanha'],
        datasets: [{
            label: 'Abril',
            data: [9852, 5674, 2163, 7896, 3258, 1900, 8241],
            borderWidth: 1,
            backgroundColor: '#297AF4'
        },
        {
            label: 'Maio',
            data: [5466, 1512, 8455, 5255, 3325, 2545, 5646],
            borderWidth: 1,
            backgroundColor: '#0B8F10'
        },
        {
            label: 'Junho',
            data: [3500, 1500, 2554, 7485, 2125, 4880, 7241],
            borderWidth: 1,
            backgroundColor: '#EA1D2C'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(pioresProdutos, {
    type: 'bar',
    data: {
        labels: ['Pizza de Nutella', 'Torta de carne', 'Baião de dois', 'Escondidinho', 'Batata frita', 'Pastel', 'Dobradinha'],
        datasets: [{
            label: 'Abril',
            data: [450, 674, 263, 696, 258, 500, 241],
            borderWidth: 1,
            backgroundColor: '#297AF4'
        },
        {
            label: 'Maio',
            data: [466, 512, 455, 255, 325, 545, 646],
            borderWidth: 1,
            backgroundColor: '#0B8F10'
        },
        {
            label: 'Junho',
            data: [500, 100, 454, 285, 125, 580, 241],
            borderWidth: 1,
            backgroundColor: '#EA1D2C'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});