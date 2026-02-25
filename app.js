/* objetivo: Arquivo responsavel pela entrada e saida de dados de aplicação
 * data: 20/02/2026
 * autor: hugo
 * versão - 1.0
 **********************************************************************************/

//import da bliblioteca para o calculo
const calculosMatematicos = require('./modulo/calcular.js');

let resposta = calculosMatematicos.calculosOp(10, 60, 'somar');

console.log(resposta);