let main  = document.getElementsByTagName('main')[0];
let body  = document.getElementsByTagName('body')[0];

//EVENTO NUEVO: eventlistener('que?', sobre/donde)el body carga completamente
function pintaConsola(){
        /*
    objetivo: corresponde al punto q tengo q llegar
    actual: corresponde al punto actual

    */
    let posicionObjetivo = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];//x
    let posicionInicio = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];//y
   
    console.log('has hecho un click');
    for(let i= 0; i<10 ; i++){
        for(let j =0 ; j<10; j++){
            let div = document.createElement('div');
            div.classList.add('card');//le doy nombre y clase
            //meto un bucle en los atributos
            div.classList.add(i+ 'f');
            div.classList.add(j+'c');

            main.appendChild(div);
            //para pintar casilla le damos color de fondo
            if(i == 5 && j == posicionObjetivo[1]){
              div.classList.add('objetivo');
              console.log(div.classList);
              console.log('Estamos en la fila: '+ parseInt(div.classList[1]));
              console.log('estamos en la col: '+ parseInt(div.classList[2]));
              //ver que es esto
            }
            if(i == 8 && j == posicionInicio[1]){
                div.classList.add('actual');
            }
        }
    }
}
body.addEventListener('load', pintaConsola());
/*
Necesito cualquier evento de tecla para poder mover el color de la casilla

*/
document.addEventListener('keydown', mover());

//recibe el objeto Event
function mover(event){
    console.log(event['key']);
    switch(event['key']){
        case 'ArrowUp':
            console.log("has pulsado hacia arriba");
            //0 no la toco 1 3f 2 2c 3 objetivo
        break;
        case 'ArrowDown':
            console.log("has pulsado hacia abajo");
        break;
        case 'ArrowLeft':
            console.log("has pulsado hacia izda");
        break;
        case 'ArrowRight': 
        console.log("has pulsado hacia derecha");
        break;
    }
    //si hay 2 clases en casilla he ganado
}
/*idea resolucion
<- columna --
-> coulmna ++
abajo fila++
arr fila--

div class= "0 1" (parseint)
hacer un array que recoja loas clases
classlist da un array con posiciones = como split pero con espacios que haya

el algoritmo
introducir la i j en la funcion q crea el tablero (i fila j col)
para mover casillas compruebo el valor de estas filas y col y opero
            
 */