function calcular(){
    let resultado = 0;
    resultado = document.getElementById('visor').value;
    document.getElementById('visor').value = eval(resultado);
}

function unir(valor){
    document.getElementById('visor').value += valor;
}

function limpar(){
    document.getElementById('visor').value = '';
}

