let numero1 = parseInt(prompt("Digite un número:"));
let numero2 = parseInt(prompt("Digite un número:"));
let numero3 = parseInt(prompt("Digite un número:"));
if(numero1 > numero2 && numero1 > numero3){
    document.write(`El numero ${numero1} es mayor que el numero ${numero2} y que el numero ${numero3} `);
}else if(numero2 > numero3 ){
    document.write(`El numero ${numero2} es mayor que el numero ${numero1} y que el numero ${numero3} `);
}else{
    document.write(`El numero ${numero3} es mayor que el numero ${numero2} y que el numero ${numero1} `);
}