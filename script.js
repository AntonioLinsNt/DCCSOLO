// Função para rolar os dados
function rolarDado() {
    const tipoDado = document.getElementById("tipo-dado").value;
    const resultado = Math.floor(Math.random() * tipoDado) + 1;
    document.getElementById("resultado-rolagem").textContent = `Resultado: ${resultado}`;
}

document.getElementById("rolar-dado").addEventListener("click", rolarDado);

// Função para salvar a ficha do personagem
function salvarFicha() {
    const nome = document.getElementById("nome").value;
    const classe = document.getElementById("classe").value;
    const forca = document.getElementById("forca").value;
    const agilidade = document.getElementById("agilidade").value;
    const resistencia = document.getElementById("resistencia").value;
    const inteligencia = document.getElementById("inteligencia").value;
    const sorte = document.getElementById("sorte").value;

    const ficha = {
        nome,
        classe,
        forca,
        agilidade,
        resistencia,
        inteligencia,
        sorte
    };

    localStorage.setItem("fichaPersonagem", JSON.stringify(ficha));
    alert("Ficha salva com sucesso!");
}

document.getElementById("salvar-personagem").addEventListener("click", salvarFicha);

// Função para carregar a ficha do personagem
function carregarFicha() {
    const ficha = JSON.parse(localStorage.getItem("fichaPersonagem"));

    if (ficha) {
        document.getElementById("nome").value = ficha.nome;
        document.getElementById("classe").value = ficha.classe;
        document.getElementById("forca").value = ficha.forca;
        document.getElementById("agilidade").value = ficha.agilidade;
        document.getElementById("resistencia").value = ficha.resistencia;
        document.getElementById("inteligencia").value = ficha.inteligencia;
        document.getElementById("sorte").value = ficha.sorte;
    }
}

window.onload = carregarFicha;
