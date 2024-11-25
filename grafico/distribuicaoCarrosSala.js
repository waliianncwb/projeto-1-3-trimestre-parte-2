import { criarGrafico, incluirTexto, getCSS } from "./common.js";

function distribuicaoCarrosSala() {
    const dadosCarros = {
        Ford: 13,
        Chevrolet: 11,
        Honda: 5,
        Volvo: 1,
        Outros: 3,
    };

    const data = [
        {
            x: Object.keys(dadosCarros),
            y: Object.values(dadosCarros),
            type: "bar",
            marker: {
                color: [
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
            text: "Carros por Marca na Sala",
            font: { size: 24, color: getCSS("--primary-color") },
        },
        xaxis: { title: { text: "Marcas" } },
        yaxis: { title: { text: "Quantidade" } },
        plot_bgcolor: getCSS("--bg-color"),
        paper_bgcolor: getCSS("--bg-color"),
    };

    criarGrafico(data, layout);

    incluirTexto(`
        Este gráfico mostra a quantidade de carros de cada marca entre os 
        <span>30 alunos</span>. A marca <span>Ford</span> domina, seguida pela 
        <span>Chevrolet</span>. Algumas marcas menos populares, como <span>Volvo</span>, 
        também estão presentes.
    `);
}

distribuicaoCarrosSala();
