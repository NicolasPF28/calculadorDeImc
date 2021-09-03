const calcular = document.querySelector ('#calcular');

function calcularImc (){

    //VARIAVEIS QUE VAI FAZER PARTE DA DEFINIÇÃO

    const idade = document.querySelector ('#idade').value;
    const definicao = document.querySelector ('#definicao');

    //VARIAVEIS DO IMC

    const peso = document.querySelector ('#peso').value;
    const altura = document.querySelector ('#altura').value;
    const imc = peso / (altura * altura);

    const resultadoImc = document.querySelector ('#resultadoImc');

    if (peso.length >= 1 && altura.length >= 1 && idade.length >= 1){    
        
        resultadoImc.value = imc.toFixed(2);
        calcularDefinicao (imc, idade, definicao);

        console.log('[SYSTEM] : calculated IMC : ', imc.toFixed(2));

    }
    else{

        resultadoImc.value = '';
        definicao.value = '';
        alert ('[ERRO] - PREENCHA TODOS OS CAMPOS ABAIXO');

    }

}

function calcularDefinicao (imc, idade, definicao){
    const masculino = document.getElementById ('masculino');
    const feminino = document.getElementById ('feminino');

    //valores das definições    
    const definicao1 = "Muito abaixo do peso"    
    const definicao2 = "Abaixo do peso"; 
    const definicao3 = "Normal";  
    const definicao4 = "Acima do peso";    
    const definicao5 = "Obesidade - grau I"; 
    const definicao6 = "Obesidade grave - grau II";   
    const definicao7 = "Obesidade mórbica - grau III";

    //conceitos diferentes para idades diferentes
    const definicao5Diferente = 'Obesidade';
     
    // pessoas acima de 18 anos
    if (idade > 18 && imc < 17.0){
        definicao.value = definicao1;
    }
    else if (idade > 18 && imc <= 18.4){
        definicao.value = definicao2;
    }
    else if (idade > 18 && imc <= 24.9){
        definicao.value = definicao3;
    }
    else if (idade > 18 && imc <= 29.9){
        definicao.value = definicao4;
    }
    else if (idade > 18 && imc <= 34.9){
        definicao.value = definicao5;
    }
    else if (idade > 18 && imc <= 39.9){
        definicao.value = definicao6;
    }
    else if (idade > 18 && imc > 39.9){
        definicao.value = definicao7;
    }
    //18 anos
    if (idade == 18 && imc < 17.0){
        definicao.value = definicao1;
    }
    else if (idade == 18 && imc < 17.5){
        definicao.value = definicao2;
    }
    else if (idade == 18 && imc <= 25.0){
        definicao.value = definicao3;
    }
    else if (idade == 18 && imc <= 28.6){
        definicao.value = definicao4;
    }
    else if (idade == 18 && imc > 28.6){
        definicao.value = definicao5Diferente;
    }
    //17 anos
    else if (idade == 17 && imc < 17.2){
        definicao.value = definicao2;
    }
    else if (idade == 17 && imc <= 24.5){
        definicao.value = definicao3;
    }
    else if (idade == 17 && imc <= 28.0){
        definicao.value = definicao4;
    }
    else if (idade == 17 && imc > 28.0){
        definicao.value = definicao5Diferente;
    }
    //16 anos
    else if (idade == 16 && imc < 16.7){
        definicao.value = definicao2;
    }
    else if (idade == 16 && imc <= 23.7){
        definicao.value = definicao3;
    }
    else if (idade == 16 && imc <= 27.3){
        definicao.value = definicao4;
    }
    else if (idade == 16 && imc > 27.3){
        definicao.value = definicao5Diferente;
    }
    //15 anos
    else if (idade == 15 && imc < 16.2){
        definicao.value = definicao2; 
    }
    else if (idade == 15 && imc <= 22.8){
        definicao.value = definicao3; 
    }
    else if (idade == 15 && imc <= 26.4){
        definicao.value = definicao4; 
    }
    else if (idade == 15 && imc > 26.4){
        definicao.value = definicao5Diferente;
    }
    //14 anos
    else if (idade == 14 && imc < 15.6){
        definicao.value = definicao2; 
    }
    else if (idade == 14 && imc <= 21.9){
        definicao.value = definicao3; 
    }
    else if (idade == 14 && imc <= 25.3){
        definicao.value = definicao4; 
    }
    else if (idade == 14 && imc > 25.3){
        definicao.value = definicao5Diferente; 
    }
    //13 anos
    else if (idade == 13 && imc < 15.0){
        definicao.value = definicao2; 
    }
    else if (idade == 13 && imc <= 21.0){
        definicao.value = definicao3; 
    }
    else if (idade == 13 && imc <= 24.2){
        definicao.value = definicao4; 
    }
    else if (idade == 13 && imc > 24.2){
        definicao.value = definicao5Diferente; 
    }
    //12 anos
    else if (idade == 12 && imc < 14.6){
        definicao.value = definicao2; 
    }
    else if (idade == 12 && imc <= 20.0){
        definicao.value = definicao3; 
    }
    else if (idade == 12 && imc <= 23.0){
        definicao.value = definicao4; 
    }
    else if (idade == 12 && imc > 23.0){
        definicao.value = definicao5Diferente;
    }
    //11 anos
    else if (idade == 11 && imc < 14.2){
        definicao.value = definicao2; 
    }
    else if (idade == 11 && imc <= 19.3){
        definicao.value = definicao3; 
    }
    else if (idade == 11 && imc <= 22.0){
        definicao.value = definicao4; 
    }
    else if (idade == 11 && imc > 22.0){
        definicao.value = definicao5Diferente; 
    }
    //10 anos
    else if (idade == 10 && imc < 13.9){
        definicao.value = definicao2; 
    }
    else if (idade == 10 && imc <= 18.6){
        definicao.value = definicao3;
    }
    else if (idade == 10 && imc <= 21.0){
        definicao.value = definicao4;
    }
    else if (idade == 10 && imc > 20.0){
        
    }
    //9 anos de idades
    else if (idade == 9 && imc < 13.6){
        definicao.value = definicao2; 
    }
    else if (idade == 9 && imc <= 18){
        definicao.value = definicao3; 
    }
    else if (idade == 9 && imc <= 20.1){
        definicao.value = definicao4; 
    }
    else if (idade == 9 && imc > 20.1){
        definicao.value = definicao5Diferente; 
    }
    //8 anos de idade;
    else if (idade == 8 && imc < 13.5){
        definicao.value = definicao2; 
    }
    else if (idade == 8 && imc <= 17.5){
        definicao.value = definicao3; 
    }
    else if (idade == 8 && imc <= 19.4){
        definicao.value = definicao4; 
    }
    else if (idade == 8 && imc > 19.4){
        definicao.value = definicao5Diferente; 
    }
    //7 anos de idade
    else if (idade == 7 && imc < 13.3){
        definicao.value = definicao2; w
    }
    else if (idade == 7 && imc <= 17.2){
        definicao.value = definicao3; 
    }
    else if (idade == 7 && imc <= 18.7){
        definicao.value = definicao4;
    }
    else if (idade == 7 && imc > 18.7){
        definicao.value = definicao5Diferente; 
    }
    //6 anos de idade
    else if (idade == 6 && imc < 13.2){
        definicao.value = definicao2;      
    }
    else if (idade == 6 && imc <= 16.9){
        definicao.value = definicao3;
    }
    else if (idade == 6 && imc <= 18.4){
        definicao.value = definicao4; 
    }
    else if (idade == 6 && imc > 18.4){
        definicao.value = definicao5Diferente; 
    }
    //5 anos de idade
    else if (idade == 5 && imc < 13.0){
        definicao.value = definicao2;
    }
    else if (idade == 5 && imc <= 16.7){
        definicao.value = definicao3;
    }
    else if (idade == 5 && imc <= 18.1){
        definicao.value = definicao4;
    }
    else if (idade == 5 && imc > 18.1){
        definicao.value = definicao5Diferente;
    }
    //4 anos de idade
    else if (idade == 4 && imc < 13.2){
        definicao.value = definicao2;
    }
    else if (idade == 4 && imc <= 16.7){
        definicao.value = definicao3;
    }
    else if (idade == 4 && imc <= 18.0){
        definicao.value = definicao4;
    }
    else if (idade == 4 && imc > 18.0){
        definicao.value = definicao5Diferente;
    }
    //3 anos de idade
    else if (idade == 3 && imc < 13.4){
        definicao.value = definicao2;
    }
    else if (idade == 3 && imc <= 17.0){
        definicao.value = definicao3;
    }
    else if (idade == 3 && imc <= 18.2){
        definicao.value = definicao4;
    }
    else if (idade == 3 && imc > 18.2){
        definicao.value = definicao5Diferente;
    }
    //2 anos de idade
    else if (idade == 2 && imc <= 14.0){
        definicao.value = definicao2;
    }
    else if (idade == 2 && imc <= 17.4){
        definicao.value = definicao3;
    }
    else if (idade == 2 && imc <= 18.7){
        definicao.value = definicao4;
    }
    else if (idade == 2 && imc > 18.7){
        definicao.value = definicao5Diferente;
    }
    //1 ano de idade
    else if (idade == 1 && imc < 14.5){
        definicao.value = definicao2;
    }
    else if (idade == 1 && imc <= 18.2){
        definicao.value = definicao3;
    }
    else if (idade == 1 && imc <= 19.6){
        definicao.value = definicao4;
    }
    else if (idade == 1 && imc > 19.6){
        definicao.value = definicao5Diferente;
    }

    console.log ('');
    console.log('definition : ', definicao.value);
    return false;
}

calcular.addEventListener ('click', calcularImc);
document.addEventListener ('keypress', keydown);

function keydown (event){
    switch (event.keyCode){
        case 13:
            calcularImc ();
            break;
    }
}