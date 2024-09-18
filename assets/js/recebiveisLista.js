// Tabela
var table = document.querySelector(".register-table tbody");
var tmplSource = document.getElementById("table").innerHTML;
var tmplHandle = Handlebars.compile(tmplSource);

var dates = [new Date(2024,8,20), new Date(2024, 7, 10), new Date(2024, 8, 1)];
var names = ["Recebimento ifood", "Transferência", "Pagamento Boleto"];
var amounts = ["R$ 1500,00", "R$ 900,00", "R$ 120,20"];
var dueDates = [new Date(2024,8,27), new Date(2024, 7, 15), new Date(2024, 8, 2)]
var types = ["Recebível", "Recebível", "Gasto"]

for (var i = 0; i < 3; i++) {
    createLineTable(names[i], amounts[i], dates[i], dueDates[i], types[i])
}

// Seta a data atual para os inputs de date
var startDate = document.getElementById('start-date');
var finishDate = document.getElementById('finish-date');
resetDates();


// Search
document.getElementById('search-button').addEventListener('click', function() {
    for (var i = 0; i < 3; i++) {

        var dateStart = new Date(startDate.value);
        var dateFinish = new Date(finishDate.value);

        var searchBar = document.getElementById("search-bar").value;

        table.replaceChildren();

        if (!searchBar) {
            if (dates[i] >= dateStart && dates[i] <= dateFinish) {
                createLineTable(names[i], amounts[i], dates[i], dueDates[i], types[i])
            }
        } else {
            if (names[i].includes(searchBar)) {
                createLineTable(names[i], amounts[i], dates[i], dueDates[i], types[i])
            }
        }
    } 
});


// Reseta os filtros
document.getElementById('reset-button').addEventListener('click', function() {

    table.replaceChildren();
    resetDates();
    document.getElementById("search-bar").value = "";

    for (var i = 0; i < 3; i++) {
        createLineTable(names[i], amounts[i], dates[i], dueDates[i], types[i])
    }
});

function formatDate(date) {
    var data = date,
        day  = data.getDate().toString(),
        formatDay = (day.length == 1) ? '0'+ day : day,
        month  = (data.getMonth()+1).toString(),
        formatMonth = (month.length == 1) ? '0'+ month : month,
        formatYear = data.getFullYear();
    return formatDay + "/" + formatMonth + "/" + formatYear;
}

function createLineTable(name, amount, date, dueDate, type) {
    var register = {};
    register.CreationDate = formatDate(date);
    register.Name = name;
    register.Amount = amount;
    register.DueDate = formatDate(dueDate);
    register.Type = type;

    var line = {};
    line.template = document.createElement("template");
    line.template.innerHTML = tmplHandle(register);
    line.content = document.importNode(line.template.content, true);

    table.appendChild(line.content);
}

function resetDates() {
    var startDate = document.getElementById('start-date');
    var finishDate = document.getElementById('finish-date');

    var today = new Date();
    today.setDate(today.getDate());
    var formattedDate = today.toISOString().split('T')[0];

    startDate.value = formattedDate;
    finishDate.value = formattedDate;
}