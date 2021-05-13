const form = document.querySelector('.pergunta');
const botao = document.querySelector('.envia-resposta');
const resultado = document.querySelector('.resultado');

let pontos = 0;

botao.addEventListener('click', function (event) {
    event.preventDefault();
    const valorSelecao = form.p1.value;
    if (valorSelecao === 'a'){
        pontos++
        resultado.classList.remove('incorreto');
        resultado.classList.add('correto');
        resultado.innerHTML = `Resposta CORRETA - quantidade de pontos: ${pontos}`;
        document.getElementById("botao").disabled = true;
;

    }else {
        pontos--
        resultado.classList.remove('correto');
        resultado.classList.add('incorreto');
        resultado.innerHTML = `Resposta INCORRETA - quantidade de pontos: ${pontos}`;
        document.getElementById("botao").disabled = true;
    }
});

const form2 = document.querySelector('.pergunta2');
const botao2 = document.querySelector('.envia-resposta2');

botao2.addEventListener('click', function (event) {
    event.preventDefault();
    const valorSelecao = form2.p2.value;
    if (valorSelecao === 'c'){
        pontos++
        resultado.classList.remove('incorreto');
        resultado.classList.add('correto');
        resultado.innerHTML = `Resposta CORRETA - quantidade de pontos: ${pontos}`;
        document.getElementById("botao2").disabled = true;

    }else {
        pontos--
        resultado.classList.remove('correto');
        resultado.classList.add('incorreto');
        resultado.innerHTML = `Resposta INCORRETA - quantidade de pontos: ${pontos}`;
        document.getElementById("botao2").disabled = true;
    }
});