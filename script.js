/** Seção dos meios para pegar informações de interações na página */
const checkBox = document.querySelector('.checkbox'); /*Usando dom para pegar o elemento dentro do codigo html com id chk*/

if (checkBox != null) {
    checkBox.addEventListener('change', () => {
        document.documentElement.classList.toggle('dark-mode'); /*troca a classe do elemento que nos queremos no caso é o body mas devo fazer de outra forma*/
        console.warn('cheguei aqui');
    })    
} else {
    console.warn('checkbox is null');
}

//limpar as tabelas antes de mostrar outro curso 

const limpaTabela = () => {
    
    let celulasParaLimpar = document.querySelectorAll('#thrs td:not(:first-child)');
    
    if (celulasParaLimpar !== null) {

        celulasParaLimpar.forEach(function(cell) {
            cell.innerHTML = '';
        });

    }
}

/**
  preenchimento das tabelas dos horários dos cursos
 */
/*
function preencherTabelaCursoCCas7() {
    //Gambiarra do krl mas funcionou
    var Materias = ["Estrutura de Dados", "Circuitos Digitais", "Calculo I", "Producao Textual", "Probabilidade e Estatistica"];
    var campos7hrs = document.getElementById('trDas7');
    if (campos7hrs != null) {
        console.warn('Achou elemento!'); //log
        let tdElements = campos7hrs.querySelectorAll('td:not(:first-child)'); //para não pegar o primeiro elemento que é a hora
        for (let i = 0; i < tdElements.length; i++) { //percorre o tamanho retornado da linha de cima 
            tdElements[i].innerHTML = Materias[i]; //altera o conteudo para o que tem no vetor 
        }
    } else {
        console.warn('Nao foi possivel achar o elemento!'); //log
    }
}
*/


function preencheTabelaGenerica(materias, campo) { //campo=Id do campo da tabela
   var forPreencher = document.getElementById(campo);
   if (forPreencher !== null) {
        let tdElements = forPreencher.querySelectorAll('td:not(:first-child)'); //para não pegar o primeiro nó filho
        if (tdElements != null) {
            tdElements.forEach(function (elemento, index) {
                elemento.innerHTML = materias[index];
            });
        } else {
            console.warn('O campo da tabela não possui nenhum filho para ser iterado');
        }
   }else {
        console.warn('Elemento não encontrado!');
   }
}

var MateriasCC = ["Estrutura de Dados", "Circuitos Digitais", "Calculo I", "Producao Textual", "Probabilidade e Estatistica"];
var MateriasHis = ["Politicas Educacionais", "Didática", "Historia Antiga", "Historia Medieval", "Informatica Basica"];
var MateriasMED = ["Matemática Instrumental", "Anatomia", "Imunologia", "Patologia", "Estatistica Basica"];
var MateriasMED2 = ["Producao Textual Academica", "Patologia", "", "Anatomia", "Estatistica Basica"];
/*Assim fica a passagem de parametros da função generica
preencheTabelaGenerica(Materias, 'trDas7');
preencheTabelaGenerica(Materias, 'trDas9');
*/

/*Sim essa gambiarra fudida funcionou para preencher as tabelas*/
/*
let teste = document.getElementById('trDas7');
console.log(teste.innerHTML);

let tdElements = teste.querySelectorAll('td:not(:first-child)');

console.log(tdElements.length); //retornou 5 então encontroy os elementos

console.log(tdElements);

var Materias = ["Estrutura de Dados", "Circuitos Digitais", "Calculo I", "Producao Textual", "Probabilidade e Estatistica"];

for (let i = 0; i < tdElements.length; i++) {
    tdElements[i].innerHTML = Materias[i];
}
*/

const botaoCC = document.getElementById('CC');
if (botaoCC != null) {
    console.log('Elemento existe');
    botaoCC.addEventListener('click', () => {
        console.log('CLICOU');
        limpaTabela();
        preencheTabelaGenerica(MateriasCC, 'trDas7');
        preencheTabelaGenerica(MateriasCC, 'trDas9');
    });
} else {
    console.log('Elemento não encontrado!');
}

const botaoHIS = document.getElementById('HIS');
if (botaoHIS != null) {
    console.log('Elemento existe');
    botaoHIS.addEventListener('click', () => {
        console.log('CLICOU');
        limpaTabela();
        preencheTabelaGenerica(MateriasHis, 'trDas7');
        preencheTabelaGenerica(MateriasHis, 'trDas9');
    });
} else {
    console.log('Elemento não encontrado!');
}

const botaoMED = document.getElementById('MED');
if (botaoMED != null) {
    console.log('Elemento existe');
    botaoMED.addEventListener('click', () => {
        console.log('CLICOU');
        limpaTabela();
        preencheTabelaGenerica(MateriasMED, 'trDas730');
        preencheTabelaGenerica(MateriasMED, 'trDas10');
        preencheTabelaGenerica(MateriasMED2, 'trDas1');
        preencheTabelaGenerica(MateriasMED2, 'trDas16');
    });   
} else {
    console.log('Elemento não encontrado!');
}