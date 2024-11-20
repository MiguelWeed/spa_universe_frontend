// Dados iniciais do ranking
let rankingData = [
    { name: "Alice", time: 45 },
    { name: "Bob", time: 30 },
    { name: "Charlie", time: 60 },
];

// Função para gerar o ranking na tela
function generateRanking(data) {
    const rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = ""; // Limpa a lista antes de renderizar novamente

    // Ordena os jogadores pelo menor tempo
    const sortedData = data.sort((a, b) => a.time - b.time);

    // Gera o HTML dos itens do ranking
    sortedData.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${index + 1}. ${item.name}</span>
            <span>${item.time} segundos</span>
        `;
        rankingList.appendChild(listItem);
    });
}

// Função para adicionar um novo jogador
function addPlayer() {
    const playerName = document.getElementById("player-name").value;
    const playerTime = parseInt(document.getElementById("player-time").value, 10);

    if (!playerName || isNaN(playerTime)) {
        alert("Por favor, insira um nome válido e tempo em segundos.");
        return;
    }

    // Adiciona o novo jogador aos dados
    rankingData.push({ name: playerName, time: playerTime });

    // Recalcula e renderiza o ranking
    generateRanking(rankingData);

    // Limpa os campos de entrada
    document.getElementById("player-name").value = "";
    document.getElementById("player-time").value = "";
}

// Inicializa o ranking na página
generateRanking(rankingData);

// Adiciona o evento ao botão de adicionar jogador
document.getElementById("add-player").addEventListener("click", addPlayer);
