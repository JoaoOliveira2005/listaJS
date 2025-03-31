function calculando(){
    var inicio = Number(document.getElementById('inicio').value);
    var fim = Number(document.getElementById('fim').value);
    var passo = Number(document.getElementById('passo').value);
    var resultado = document.getElementById('resultado');

            if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo === 0) {
        window.alert("ERRO, digite números válidos e um passo diferente de 0.");
        return;
            }


    


    

        for(var i = inicio; i < fim + 1; i += passo){

            resultado.innerHTML += " -> " + [i];


        }







}