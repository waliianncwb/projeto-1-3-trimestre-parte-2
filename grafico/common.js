export function getCSS(variable) {
    return getComputedStyle(document.body).getPropertyValue(variable);
}

export function criarGrafico(data, layout) {
    const grafico = document.createElement("div");
    document.getElementById("graficos-container").appendChild(grafico);

    Plotly.newPlot(grafico, data, layout, { responsive: true });
}

export function incluirTexto(texto) {
    const container = document.getElementById("graficos-container");
    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = texto;
    container.appendChild(paragrafo);
}
