    var matriz = [];

        function analisar(){

            var input = document.getElementById('valores');

            var dados = Number(input.value);

            if(dados > 100 || isNaN(dados) || dados == 0){
                window.alert("ERRO")

                return;
            }


            matriz.push(dados);

            

            var listavalores = document.getElementById('listavalores');

            var paragrafo = document.createElement('li');

            paragrafo.textContent = "O valor (" + matriz[matriz.length - 1] + ") Foi adicionado";

            listavalores.appendChild(paragrafo);

            input.value = "";


        }

        function calcular(){

            var resultado = document.getElementById('resultado');

            var total = matriz.length;

            var maior = Math.max(...matriz);

            var menor = Math.min(...matriz);

            var soma = 0;

            for(var i = 0; i < matriz.length; i++){
                soma += matriz[i];

            }

            var media = soma / matriz.length;


            var textos = ["Ao todo temos: " + total + " itens.",
                "o maior valor informado foi: " + maior,
                "o menor valor foi: " + menor,
                "somando todos os valores da: " + soma,
                "A media dos valores digitados foi: " + media


            ]

            textos.forEach(texto => {
                var paragrafo = document.createElement('li');
                paragrafo.textContent = texto;
                resultado.appendChild(paragrafo);
            });


        }