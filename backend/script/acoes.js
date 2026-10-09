var saida = document.getElementById("saida");

function mostrarMensagem(mensagem) {
    if (saida) {
        saida.innerHTML = `<h2>${mensagem}</h2>`;
    }
}

function acao1() {
    var resposta = prompt("Informe um número");

    if (resposta === null) {
        mostrarMensagem("Ação cancelada.");
    } else if (resposta.trim() === "6") {
        mostrarMensagem("O número informado é igual a 6.");
    } else {
        mostrarMensagem("O número informado é diferente de 6.");
    }
}

function acao2() {
    var dia = 2;
    let nomeDia;

    switch (dia) {
        case 1:
            nomeDia = "Domingo";
            break;
        case 2:
            nomeDia = "Segunda";
            break;
        default:
            nomeDia = "Outro dia";
    }

    mostrarMensagem(`Switch: ${nomeDia}`);
}

function acao3() {
    let texto = "";

    for (let i = 1; i <= 3; i++) {
        texto += `Loop ${i} `;
    }

    mostrarMensagem(`For: ${texto}`);
}

function acao4() {
    let numero = 1;
    let texto = "";

    while (numero <= 3) {
        texto += `${numero} `;
        numero++;
    }

    mostrarMensagem(`While: ${texto}`);
}

function acao5() {
    let numero = 1;
    let texto = "";

    do {
        texto += `${numero} `;
        numero++;
    } while (numero <= 3);

    mostrarMensagem(`Do While: ${texto}`);
}

function acao6() {
    var frutas = ["Maçã", "Banana", "Laranja"];
    mostrarMensagem(`Array: ${frutas.join(", ")}`);
}

function acao7() {
    var animais = [...document.querySelectorAll('input[name="animal"]:checked')].map(input => input.value);
    mostrarMensagem(`ById/Name: ${animais.length ? animais.join(", ") : "Nenhum selecionado"}`);
}

function acao8() {
    mostrarMensagem("Função1: executada com sucesso!");
}

function acao9() {
    mostrarMensagem("Função2: executada com sucesso!");
}

function acao10() {
    localStorage.setItem("login", "admin@gmail.com");
    var login = localStorage.getItem("login") || "Nenhum";
    document.getElementById("session").textContent = login;
    mostrarMensagem(`Sessão: ${login}`);
}

function acao11() {
    var hotel = {
        nome: "Hotel JavaScript",
        quartosDisponiveis: 15
    };

    document.getElementById("nome").textContent = hotel.nome;
    document.getElementById("quartos").textContent = hotel.quartosDisponiveis;
    mostrarMensagem(`Obj Literal: ${hotel.nome} com ${hotel.quartosDisponiveis} quartos`);
}

function acao12() {
    function Carro(modelo, kmAtual, trocaOleo) {
        this.modelo = modelo;
        this.kmAtual = kmAtual;
        this.trocaOleo = trocaOleo;
    }

    var meuCarro = new Carro("Fiat Uno", 12500, "2026-07-15");
    document.getElementById("modelo").textContent = meuCarro.modelo;
    document.getElementById("kmAtual").textContent = meuCarro.kmAtual;
    document.getElementById("oleoMotor").textContent = meuCarro.trocaOleo;
    mostrarMensagem(`Obj Construtor: ${meuCarro.modelo}`);
}

function acao13() {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    var pessoa = new Pessoa("Maria", 28);
    mostrarMensagem(`Outro Construtor: ${pessoa.nome} (${pessoa.idade} anos)`);
}

function acao14() {
    mostrarMensagem("Banco: conexão simulada com sucesso!");
}

var sessionElement = document.getElementById("session");
if (sessionElement) {
    sessionElement.textContent = localStorage.getItem("login") || "Nenhum";
}

var nomeHotel = document.getElementById("nome");
var quartosHotel = document.getElementById("quartos");
if (nomeHotel && quartosHotel) {
    nomeHotel.textContent = "Hotel JavaScript";
    quartosHotel.textContent = 15;
}

var item = document.getElementById("item");
if (item) {
    item.textContent = "Objeto inicializado com sucesso.";
}

var life = document.getElementById("life");
if (life) {
    life.textContent = "IIFE executada!";
}

(function () {
    var welcome = document.getElementById("titulo");
    if (welcome) {
        welcome.textContent = "JavaScript - Revisão";
    }
})();

var funcoesAcoes = {
    acao1,
    acao2,
    acao3,
    acao4,
    acao5,
    acao6,
    acao7,
    acao8,
    acao9,
    acao10,
    acao11,
    acao12,
    acao13,
    acao14
};

document.querySelectorAll("[data-acao]").forEach(botao => {
    var nomeAcao = botao.dataset.acao;
    var executarAcao = funcoesAcoes[nomeAcao];

    if (executarAcao) {
        botao.addEventListener("click", executarAcao);
    } else {
        console.error(`Ação não encontrada para o botão: ${nomeAcao}`);
    }
});
