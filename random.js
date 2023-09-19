function sortearNumero(){
    
    const min=Math.floor(document.querySelector('.input-min').value)
    const max=Math.ceil(document.querySelector('.input-max').value)

    const result=Math.floor(Math.random()*(max-min+1))+min;

    console.log(min,max)

    const numeroSorteado = document.getElementById("resultadoSorteio")
    
    numeroSorteado.textContent = "Número sorteado: " + result;

    
}