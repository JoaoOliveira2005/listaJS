// saida, imprimir texto

// alert('ola mundo');

//document.getElementById("texto").innerHTML="meu primeiro <b> inner </b> !";

//console.log("oi isso é um console.log");

//------------

// declaraçao de variavel
//varios tipos de operadores 
// 
//
/* 
var a = 1;
var b = 3;
var c = a + b;

let x = 10
{
    let x = 5;
}

document.getElementById("oi").innerHTML = x;

console.log(c);

var Valor1, Valor2, Valor3, total;




//VARIAVEOIS



Valor1 = 10;
valor2 = 4;
valor3 = 10;

total = (Valor1 == valor3);

alert(total)


var eleitor, teste;
eleitor = 18
teste = (eleitor > 15) ? "pode votar" : "nao pode votar";

alert("a resposta é:" + " " +  teste);





//FUNÇOES





function soma(valor1, valor2){
    return valor1 + valor2;
}

function realParaDolar(valor1){
    return valor1 / 5,70;
}

function AlertaHello() {
    alert("hello pessoal");
}

alert(realParaDolar(5,70))
*/

//----------------------

//POO ORIENTA A OBJETO

//-----------------------


/*
const carro = {
    marca: "Ford", 
    modelo: "Ka", 
    ano: 2008, 
    placa: "ABCD-10E15", 
    buzina: function(){ alert("biiiiiiiiiiiiiiiii")},
    completo: function(){ 
        return "A marca é: " + this.marca + " o modelo é: " + this.modelo;
    }

};*/

//--------------------------------------------------------------

//EVENTOS AO PASSAR MOUSE OU SAIR DE CIMA, ONCLICK, DBCLICK

//--------------------------------------------------------------


/*
onclick => disparado quando recebe um click
ondblclick => disparado quando click duplo
onmouseover => disparado quando o mouse está sobre
onmouseout => disparado quando o mouse sai do objeto
onmousemove => disparado quando o mouse é movido no elemento
onmousedown => disparado quando o click do botão for pressionado
onmouseup = > disparado quando o click do mouse é solto
onfocus => disparado quando o elemento recebe o foco. Válido para input
onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
onblur => disparado quando o elemento perde o foco
onkeydown => disparado quando uma tecla é pressionada 
onkeypress => disparado quando uma tecla é pressionada e solta
onkeyup => disparado quando uma tecla é solta sobre o elemento
onload => disparado quando a página terminou de ser carregada. Body
/*

// evento on click 
console.log(carro.completo());

function eventoClick(){

    document.body.style.background = "blue"

}
    
// evento db clicK



//-----------------------------------------

// FUNCOES 

//-----------------------------------------


function eventoDblClick(){
    document.body.style.background = "yellow"
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red"

}

function viraAzul(){
     let div = document.getElementById("teste");
    div.style.backgroundColor = "blue"

}

function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append('moveu<br>');
}

*/


//---------------------------------------------------


//ARRAY E MATRIZES


//-------------------------------------------------------


/*alert(pessoa.length);

alert(pessoa[1]);

alert(pessoa);
*/

// pessoa.push coloca no ultimo
// pessoa.pop, tira o ultimo

//  pessoa.shift remove o primeiro na matriz e 
// unshift adiciona no primeiro elementeo da matriz 

//delete pessoa[posição] remove o elemento da posição desejada, mas nao remove a posição, a posição fica como undefined

//pessoa.splice(posição, quantos elementos eu quero que seja removido depois, "conteudo") adiciona o conteudo na posição desejada e colocada
/*

const pessoa = ["João", "Gabriel", 19]

pessoa.push("oliveira");

pessoa.pop()

alert(pessoa)

pessoa[pessoa.length] = "ola"

//pessoa.pop();

pessoa.shift();
pessoa.unshift("Joao");

//delete pessoa[2];

pessoa.splice(5,0, "item 1", "item adicionado 2")


document.getElementById("oi").innerHTML = pessoa.join(" * ");*/


//--------------------------------------------------------------------------// 

//const superpessoa = pessoa.concat(pessoa2); junta dois arrays 

//outrasPessoas = pessoa.slice(2),    corta a matriz na posição desejada e adicona em outra matriz
//                pessoa.slice(2,3)   corta ate o ponto escolhido            

//const pessoaABC = pessoa.sort      ordena em ordem alfabetica
//                  pessoa.reverse   inverte a ordem

/*
const lista1 = ["arroz", "feijao", "frango", "salada" ];

const lista2 = ["carvao", "linguiça", "vinagrete"];

const superLista = lista1.slice(2,3)

document.getElementById("texto").innerHTML = superLista;*/
/*




________________________________________________________



IF E ELSE



_________________________________________________________







var hora = new Date().getHours();

if(hora < 12){
    alert("bom dia");
}else if(hora < 18){
    alert("boa tarde");
}else{
    alert("boa noite");
}*/


// _____________________________________________________________________________________


// SWITCH 


//_______________________________________________________________________________________


/*

function verificar(){
    let nome = document.getElementById("nome").value;

    if(nome == null || nome == ""){
        document.getElementById("teste").innerHTML = "invalido!"

    }else{
        document.getElementById("teste").innerHTML = "adicionado!"
        
    }
}

function mudacor(){
    let cor = document.getElementById("input2").value;

    switch(cor){
        case "azul":
            document.body.style.backgroundColor = "blue" 
        break;

        case "preto":
            document.body.style.backgroundColor = "black" 
             
        break;

        default: document.getElementById("paragrafo").innerHTML = "nao ha nenhuma cor disponivel para: " + cor; 

       

        



    }

}


var ano = new Date().getFullYear();

for(let i=ano; i > 1900; i--){
    document.getElementById("select").innerHTML += "<option value ='"+ i +"'>" + i + "</option>"
}

const carro = ["modelo", "ano", "cor", "placa"];

var tamanho = carro.length;

for(let i=0; i<tamanho; i++){
    document.getElementById("teste").innerHTML += carro[i] + " ";
}

---------------------------------------------------------------


FUNCTION SETTIMEOUT, SETINTERVAL, CLEAR


---------------------------------------------------------------

function contagem(){
    //document.getElementById("tempo").innerHTML = "começou a contar"

    //tempo = setTimeout(function(){
       // document.getElementById("tempo").innerHTML = "HELLO WORLD!"

    //}, 5000);

    tempo1 = setInterval(function(){
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById("tempo").innerHTML = soma;

    }, 1000);

}

function pararcontagem(){
    clearInterval(tempo1);
    document.getElementById("tempo").innerHTML = "parou a contagem"


}*/



//______________________________________________________________________


//CLASSES


//_______________________________________________________________________

/*



class Carro {
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " BIIIIIIIIIII";
    }
}

const uno = new Carro("fiat", "uno", 2000);
const gol = new Carro("volskwagem", "gol", 2001);

document.getElementById("tempo").innerHTML = uno;
console.log(uno);
console.log(uno.buzina())
console.log(gol);
console.log(gol.buzina()); 8
*/
//_____________________________________________________________


//DATAS MANIPULAÇÂO


//_____________________________________________________________

/*
let data = new Date();
console.log(data);

let ano = data.getFullYear();
console.log(ano);

let mes = data.getMonth();
console.log(mes + 1);

var mesnome = ["janeiro", "fevereiro", "março", "abril", "maio", "junho","julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
console.log(mesnome[mes]);


let dataBR = data.toLocaleString('pt-br', { dateStyle: 'short'});
console.log(dataBR);
*/

/*
const ajax = XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function(){
    document.getElementById('tempo').innerHTML = this.responseText;

} */
