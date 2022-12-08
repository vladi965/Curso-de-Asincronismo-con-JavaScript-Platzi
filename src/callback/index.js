//Realizar una función llamada Suma que reciba dos valores y que retorne la suma de esos valores

function sum(num1, num2) {
    return num1 + num2;
}

//Esta función va a recibir el callback sum y que se va a ejecutar

function calc(num1, num2, sumNumbers) {
    return sumNumbers(num1, num2);
};

console.log(calc(2,8, sum));


//Vamos a trabajar con SetTimeout
/**
 * Esto quiere decir que despues de 2 segundos se va a mostrar en
 * consola el mensaje de Hola Javascript
*/

setTimeout(function(){
    console.log('Hola Javascript');
}, 5000)

function gretting(name) {
    console.log(`Hola ${name}`)
}

setTimeout(gretting, 2000, 'Vladii');
