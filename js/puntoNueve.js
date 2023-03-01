let palabra = prompt("Escribe una palabra:");
let aux=0;
while(aux <= palabra.length){
    if(palabra.substr(aux,1) == 'a' || palabra.substr(aux,1) == 'e' || palabra.substr(aux,1) == 'i' || palabra.substr(aux,1) == 'o' || palabra.substr(aux,1) == 'u' ){
        document.write(palabra.substr(aux,1));
    }
    aux++;
}
