// Seta o saldo da conta
var header = document.querySelectorAll('.saldo');
var balance = "R$ 2589,26";
header[0].querySelector('.balance p').textContent = balance;

// Oculta o Saldo
var hideButton = document.getElementById('hide-balance');
hideButton.addEventListener('click', function() {
    var amount = document.getElementById('balance-amount').innerHTML;
    if (amount == '*******') {
        document.getElementById('balance-amount').textContent = balance;
    }
    else {
        document.getElementById('balance-amount').textContent = '*******';
    }
    
})