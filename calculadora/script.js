document.getElementById('roiForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Coletando os dados do formulário
    const custoInstalacao = parseFloat(document.getElementById('custoInstalacao').value);
    const consumoMensal = parseFloat(document.getElementById('consumoMensal').value);
    const custoEnergia = parseFloat(document.getElementById('custoEnergia').value);
    const incentivos = parseFloat(document.getElementById('incentivos').value);

    // Validando os dados
    if (isNaN(custoInstalacao) || isNaN(consumoMensal) || isNaN(custoEnergia)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Calculando a economia anual
    const economiaMensal = consumoMensal * custoEnergia;
    const economiaAnual = economiaMensal * 12;

    // Calculando o tempo de retorno
    const tempoRetorno = (custoInstalacao - incentivos) / economiaAnual;

    // Exibindo os resultados
    document.getElementById('tempoRetorno').textContent = `Tempo de Retorno: ${tempoRetorno.toFixed(2)} anos`;
    document.getElementById('economiaAnual').textContent = `Economia Anual: R$ ${economiaAnual.toFixed(2)}`;

    // Exibindo a seção de resultados
    document.getElementById('resultado').style.display = 'block';
});
