const campoSenha = document.getElementById("senha");
const campoTamanho = document.getElementById("tamanho");

const opcaoMaiusculas = document.getElementById("maiusculas");
const opcaoMinusculas = document.getElementById("minusculas");
const opcaoNumeros = document.getElementById("numeros");
const opcaoEspeciais = document.getElementById("especiais");

const botaoGerar = document.getElementById("gerar");
const botaoLimpar = document.getElementById("limpar");

function gerarSenha() {
    const tamanho = Number(campoTamanho.value);
    let caracteres = "";

    if (!Number.isInteger(tamanho) || tamanho < 4 || tamanho > 24) {
        alert("Senha deve conter um número de 1 a 24")
        campoSenha.value = "";
        return;
    }

    if (opcaoMaiusculas.checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (opcaoMinusculas.checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }

    if (opcaoNumeros.checked) {
        caracteres += "0123456789";
    }

    if (opcaoEspeciais.checked) {
        caracteres += "!@#$%&*?";
    }

    if (caracteres.length === 0) {
        campoSenha.value = "";
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    campoSenha.value = senha;
}

function limparCampos() {
    campoSenha.value = "";
    campoTamanho.value = "";

    opcaoMaiusculas.checked = false;
    opcaoMinusculas.checked = false;
    opcaoNumeros.checked = false;
    opcaoEspeciais.checked = false;
}

botaoGerar.addEventListener("click", gerarSenha);
botaoLimpar.addEventListener("click", limparCampos);