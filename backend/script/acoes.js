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
    var clima = prompt("Como está o tempo hoje? (sol, chuva, nublado)");
    var mensagem = "Clicou no segundo botão. ";

    switch (clima) {
        case "chuva":
        case "chuvoso":
            mensagem += "Lembre-se de trazer guarda-chuva.";
            break;
        case "sol":
            mensagem += "Vista roupas leves.";
            break;
        case "nublado":
            mensagem += "Vá lá fora.";
            break;
        case null:
            mensagem = "Ação cancelada.";
            break;
        default:
            mensagem += "Tempo desconhecido.";
    }

    mostrarMensagem(mensagem);
}

function acao3() {
    let resposta = prompt("Informe um número inteiro maior que zero");
    if (resposta === null) {
        mostrarMensagem("Ação cancelada.");
        return;
    }

    let limite = Number(resposta);
    if (!Number.isInteger(limite) || limite < 1) {
        mostrarMensagem("Informe um número inteiro maior que zero.");
        return;
    }

    let texto = "";
    for (let i = 0; i <= limite; i++) {
        texto += `<br>Parágrafo ${i}`;
    }

    mostrarMensagem(`For:${texto}`);
}

function acao4() {
    let resposta = prompt("Informe um número inteiro maior que zero");

    if (resposta === null) {
        mostrarMensagem("Ação cancelada.");
        return;
    }

    let limite = Number(resposta);
    if (!Number.isInteger(limite) || limite < 1) {
        mostrarMensagem("Informe um número inteiro maior que zero.");
        return;
    }

    let texto = "";
    let numero = 0;
    while (numero <= limite) {
        texto += `<br>Parágrafo ${numero}`;
        numero++;
    }

    mostrarMensagem(`While:${texto}`);
}

function acao5() {
    let resposta = prompt("Informe um número inteiro maior que zero");
    if (resposta === null) {
        mostrarMensagem("Ação cancelada.");
        return;
    }

    let limite = Number(resposta);
    if (!Number.isInteger(limite) || limite < 1) {
        mostrarMensagem("Informe um número inteiro maior que zero.");
        return;
    }

    let numero = 0;
    let texto = "";
    do {
        texto += `<br>Linha ${numero}`;
        numero++;
    } while (numero <= limite);

    mostrarMensagem(`Do While:${texto}`);
}

function acao6() {
    let myArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    let elementos = myArray.map((value, index) => `Elemento ${index}: ${value}`);

    mostrarMensagem(`Array:<br>${elementos.join("<br>")}`);
}

function acao7() {
    let nome = prompt("Informe seu nome");
    if (nome === null) {
        mostrarMensagem("Ação cancelada.");
        return;
    }

    document.getElementById("titulo").textContent = `Bem-vindo, ${nome}`;
    document.getElementsByName("animal").forEach(animal => animal.checked = true);
    let paragrafos = document.getElementsByName("paragrafo");
    if (paragrafos[1]) {
        paragrafos[1].textContent = "Parágrafo atualizado usando getElementsByName.";
    }

    mostrarMensagem("Ação 7 executada.");
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
