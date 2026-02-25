/***********************
 * objetivo: Arquivo responsavel pelo calculo (SOMA, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * data: 20/02/2026
 * autor: hugo
 * versão - 1.0
 ************************/
//A ausencia das {} na adicional porque qualquer condicional
//que tenha apenas uma lina de processamento a { se torna opcional}




//criação o modelo de função anonima
//calcular as quatro(4) operações matematicas
const calculosOp = function (numero1, numero2, operador) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let resultado;
    let operadorMatematico = String(operador).toLowerCase();

    const validarDados = function(valor1, valor2, operador){
        if (isNaN(valor1) || isNaN(valor2)) return false;

    switch (operadorMatematico) {
        case 'somar':
            resultado = somar(valor1, valor2);
            break;

        case 'subtrair':
            resultado = subtrair(valor1, valor2);
            break;

        case 'multiplicar':
            resultado = multiplicar(valor1, valor2);
            break;

        case 'dividir':
            if (valor2 === 0) return false;
            resultado = dividir(valor1, valor2);
            break;

        default:
            return false;
    }

    return resultado;
};

}

//exemplo de função baseada em SETA (arrow function)
//funções para realizar as operações matematicas
//essa função não precisa de return, pois a propria seta faz esse trabalho
const somar         = (numero1, numero2) => Number(numero1) + Number(2)
const subtrair      = (numero1, numero2) => Number(numero1) - Number(2)
const multiplicar    = (numero1, numero2) => Number(numero1) * Number(2)
const dividir       = (numero1, numero2) => Number(numero1) / Number(2)


module.exports = {
    calculosOp
};