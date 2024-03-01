function calcularMedia() {
    var numero1 = parseFloat(prompt("Digite o primeiro número:"));
    var numero2 = parseFloat(prompt("Digite o segundo número:"));
    var numero3 = parseFloat(prompt("Digite o terceiro número:"));
    
    // Calculando a soma dos números
    var soma = numero1 + numero2 + numero3;
    
    // Calculando a média
    var media = soma / 3;
    
    // Exibindo a média na tela
    console.log("A média dos números é: " + media);
}


