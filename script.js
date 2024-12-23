document.getElementById('solar-calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const consumption = parseFloat(document.getElementById('consumption').value);
    const panelEfficiency = parseFloat(document.getElementById('panel-efficiency')) / 100;
    const sunHours = parseFloat(document.getElementById('sun-hours').value);

    // Dados médios para sistemas fotovoltaicos
    const wattsPerPanel = 300; // Potência média de um painel solar em watts

    // Cálculo da produção de energia diária
    const dailyProduction = panelEfficiency * sunHours * wattsPerPanel;

    // Cálculo do número de painéis necessários
    const requiredPanels = Math.ceil(consumption / dailyProduction);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Número de painéis solares necessários: ${requiredPanels}`;
});
