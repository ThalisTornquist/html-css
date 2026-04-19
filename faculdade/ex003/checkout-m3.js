
//Capturamos o botão de envio
const somabtn = document.querySelector('#somarBtn')
const diferencabtn = document.querySelector('#menosBtn')

const multibtn = document.querySelector('#multibtn')
const divbtn = document.querySelector('#divbtn')

//Captura do elemento resultado para exemplo de utilização dos dados capturados
const resultado = document.querySelector('#resultado')




multibtn.addEventListener("click", function(event) {
    event.preventDefault()
    
    const n1 = document.querySelector('#numero1').value
    const n2 = document.querySelector('#numero2').value

    multi(n1, n2);
})


divbtn.addEventListener("click", function(event) {
    event.preventDefault()
    
    const n1 = document.querySelector('#numero1').value
    const n2 = document.querySelector('#numero2').value

    div(n1, n2);
})


function multi(n1, n2){
    let N1 = parseFloat(n1);
    let N2 = parseFloat(n2);

    let R = N1 * N2

    resultado.innerHTML = "Resultado: " + R;

    window.alert("Resultado : " + R);
}


function div(n1, n2){
    let N1 = parseFloat(n1);
    let N2 = parseFloat(n2);
    let R = 0

    if (N1 > N2)
        R = N1 / N2;
    else
        R = N2 / N1;
        
    resultado.innerHTML = "Resultado: " + R;

    window.alert("Resultado : " + R);
}





//Adiciona ao botão de soma um elemento de escuta de evento que procura um click para executar uma função
somabtn.addEventListener("click", function(event) {
    event.preventDefault() //impede o envio do formulário neste exercício
    
    //Criação da variavel que vai capturar o valor do elemento com id numero1 e numero2
    const n1 = document.querySelector('#numero1').value
    const n2 = document.querySelector('#numero2').value

    //Chamada da função
    soma(n1, n2);
}) 

//Adiciona ao botão de subtração um elemento de escuta de evento que procura um click para executar uma função
diferencabtn.addEventListener("click",function(event){
    event.preventDefault()
    
    //Criação da variavel que vai capturar o valor do elemento com id numero1 e numero2
    const n1 = document.querySelector('#numero1').value
    const n2 = document.querySelector('#numero2').value

    //Chamada da função
    diferenca(n1,n2);
})

//Função que implenta a soma
function soma(n1, n2){

    //Atribuição dos parametros nas variáveis N1 e N2 fazendo o casting para número real
    let N1 = parseFloat(n1);
    let N2 = parseFloat(n2);

    //Operação
    let R = N1 + N2;

    //Alteração do conteudo da página
    resultado.innerHTML = "Resultado: " + R;

    window.alert("Resultado : " + R);

}

//Função que implementa a diferença
function diferenca(n1, n2){

    //Atribuição dos parametros nas variáveis N1 e N2 fazendo o casting para número real
    let N1 = parseFloat(n1);
    let N2 = parseFloat(n2);
    let R = 0;

    //Operação
    if (N1 > N2)
        R = N1 - N2;
    else
        R = N2 - N1;

    //Alteração do conteúdo da página
    resultado.innerHTML = "Resultado: " + R;

    window.alert("Resultado : " + R);

}