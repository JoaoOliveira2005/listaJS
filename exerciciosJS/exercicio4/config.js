function tabuada(){

    var valor = Number(document.getElementById('inicio').value);

    var resultado = document.getElementById('resultado');


    if(valor == NaN || valor == 0){
        resultado.innerHTML = "ERRO";
        return;
    }

    for(var i = 1; i < 11; i++){
        var multiplicação = valor * [i];

        var paragrafo = document.createElement("p");

        paragrafo.textContent =+  "(" + valor + " x " + [i] + " = " + multiplicação + ")";

        resultado.appendChild(paragrafo);







    }

    return
}