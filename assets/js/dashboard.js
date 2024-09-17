// Gráfico vertical
const salesChart = document.getElementById('sales-chart');

new Chart(salesChart, {
    type: 'bar',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07'],
        datasets: [{
            label: 'Faturamento em R$',
            data: [9852, 5674, 2163, 7896, 3258, 900, 8241],
            borderWidth: 1,
            backgroundColor: '#0B8F10'
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

// Gráfico Horizontal
const receivesChart = document.getElementById('reiceves-chart')
new Chart(receivesChart, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
        datasets: [{
            axis: 'y',
            label: 'Receitas',
            data: [52000, 32000, 89000, 45000, 60000, 55000, 40000],
            borderWidth: 1,
            backgroundColor: '#0B8F10'

        },
        {
            axis: 'y',
            label: 'Despesas',
            data: [47000, 27000, 80000, 21000, 56000, 45000, 32000],
            borderWidth: 1,
            backgroundColor: '#EA1D2C'
        }]
    },
    options: {
        indexAxis: 'y',
    }
});

// Tabela de movimentações
var table = document.querySelector(".moves tbody");

var dates = ["10/06", "08/06", "01/06"];
var descriptions = ["Recebimento ifood", "Transferência", "Pagamento Boleto"];
var amounts = ["R$ 1500,00", "R$ 900,00", "R$ 120,20"];

var tmplSource = document.getElementById("move-table").innerHTML;
var tmplHandle = Handlebars.compile(tmplSource);

for (var i = 0; i < 3; i++) {
    var register = {};
    register.Date = dates[i];
    register.Description = descriptions[i];
    register.Amount = amounts[i]

    var line = {};
    line.template = document.createElement("template");
    line.template.innerHTML = tmplHandle(register);
    line.content = document.importNode(line.template.content, true);

    table.appendChild(line.content);
}

// Tabela de Insights
var table = document.querySelector(".insights tbody");

var descriptions = ["O mês de Junho acabou, veja sua retrospectiva financeira e resultados do mês", "Suas receitas aumentatam em 20% nos últimos 3 meses", "Suas despesas diminuiras 15% no último mês"];

var tmplSource = document.getElementById("insights-table").innerHTML;
var tmplHandle = Handlebars.compile(tmplSource);

for (var i = 0; i < 3; i++) {
    var register = {};

    register.Description = descriptions[i];

    var line = {};
    line.template = document.createElement("template");
    line.template.innerHTML = tmplHandle(register);
    line.content = document.importNode(line.template.content, true);

    table.appendChild(line.content);
}

// Seta o nome do usuário
var header = document.querySelectorAll('.header');
var personName = "Marcos";
header[0].querySelector('.greeting').textContent = "Olá " + personName + ", seja bem vindo!";

// Seta o saldo da conta
var header = document.querySelectorAll('.header');
var balance = "R$ 2589,26";
header[0].querySelector('.balance p').textContent = balance;

// Oculta o Saldo
var hideButton = document.getElementById('hide-balance');
hideButton.addEventListener('click', function() {
    var opacity = document.getElementById('balance-amount').style.opacity;
    console.log(opacity);
    if (opacity == 1 || !opacity) {
        document.getElementById('balance-amount').style.opacity = 0.01;
    }
    else {
        document.getElementById('balance-amount').style.opacity = 1;
    }
    
})