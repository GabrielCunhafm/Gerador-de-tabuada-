document.getElementById('gerar').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');
    
    // Verifica se o número está entre 1 e 10
    if (numero < 1 || numero > 10) {
        resultadoDiv.innerHTML = 'Por favor, insira um número entre 1 e 10.';
        return;
    }

    let tabuada = `<h2>Tabuada do ${numero}</h2><ul> `;
    
    for (let i = 1; i <= 10; i++) {
        tabuada += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }
    
    tabuada += '</ul>';
    resultadoDiv.innerHTML = tabuada;
});