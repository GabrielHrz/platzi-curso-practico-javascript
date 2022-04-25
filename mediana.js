const lista = [5,4,3,2,1];

lista.sort(function (a,b){
    return a - b;
});

/* function ordenarMenorMayor(){
    for(let i = 0; i < lista.length ; i++){

        for(z = 0; z < lista.length ; z++){
            if(lista[z + 1] < lista[z]){
                let aux1 = lista[z + 1];
                let aux2 = lista[z];
                lista[z + 1] = aux2;
                lista[z] = aux1;
            }
        }
    }
} */

function esPar(cantElementos){
    if(cantElementos % 2 === 0){
        return true;
    }
    return false;
}
/* ordenarMenorMayor(); */

const mitadElementos = lista.length / 2;
let media =  0;

if(esPar(lista.length)){
    const element1 = lista[mitadElementos-1];
    const element2 = lista[mitadElementos];
    media = (element1 + element2) / 2;
}else{
    media = lista[parseInt(mitadElementos)]; 
}

console.log(media);