import { criarGrafico, incluirTexto, getCSS } from "./common.js";

function distribuicaoCarros() {
    const dadosCarros = {
        Ford: 13,
        Chevrolet: 11,
        Honda: 5,
        Volvo: 1,
        Outros: 3,
    };

    // Criando o gráfico
    const data = [
        {
            labels: Object.keys(dadosCarros),
            values: Object.values(dadosCarros),
            type: "pie",
            textinfo: "label+percent",
            marker: {
                colors: [
                    getCSS("--secondary-color"),
                    "#ffcc00",
                    "#33cc33",
                    "#3399ff",
                    "#ff66cc",
                ],
            },
        },
    ];

    const layout = {
        title: {
            text: "Distribuição de Carros na Sala",
            font: { size: 24, color: getCSS("--primary-color") },
        },
        paper_bgcolor: getCSS("--bg-color"),
    };

    criarGrafico(data, layout);

    const texto = `
        Entre os <span>30 alunos</span> da sala, a marca <span>Ford</span> é a mais popular com 
        <span>13 donos</span>, seguida pela <span>Chevrolet</span> com <span>11 donos</span>.
        Outras marcas, como <span>Honda</span>, <span>Volvo</span> e "Outros", também aparecem.
    `;
    incluirTexto(texto);
}

distribuicaoCarros();
