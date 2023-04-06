let main  = document.getElementsByTagName('main')[0];
let body  = document.getElementsByTagName('body')[0];
let button = document.createElement('button');
//EVENTO NUEVO: eventlistener('que?', sobre/donde)el body carga completamente
function pintaConsola(){
        /*
    objetivo: corresponde al punto q tengo q llegar  * creootro
    actual: corresponde al punto actual

    */
    let posicionObjetivo = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    let posicionInicio1 =  [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    let posicionInicio2 = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];

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
            if(i == 8 && j == posicionInicio1[1]){
                div.classList.add('actual1');
            }
            if(i == 8 && j == posicionInicio2[1]){
                div.classList.add('actual2');
            }
        }
    }
}
//document.addEventListener('DOMContentLoaded',pintaConsola);
pintaConsola();
button.textContent= "Reiniciar";
button.setAttribute('class','boton');
button.addEventListener('click', reinicio);
/*
Necesito cualquier evento de tecla para poder mover el color de la casilla

*/
main.appendChild(button);
document.addEventListener('keydown', mover);



function reinicio(){
    //No reinicio como tal
        main.textContent = " ";
        pintaConsola();
        button.textContent="Reiniciar";
        main.appendChild(button);
} 


//recibe el objeto Event
function mover(event){
    let jugador1 = document.getElementsByClassName('actual1')[0];
    let jugador2 = document.getElementsByClassName('actual2')[0];
  
    let pos1 = [parseInt(jugador1.classList[1]), parseInt(jugador1.classList[2])];
    let pos2 =[parseInt(jugador2.classList[1]), parseInt(jugador2.classList[2])];
    console.log(pos1);
    console.log(pos2);  //sé posición

    console.log(event['key']);
    switch(event['key']){
        //jugador 2
        case 'ArrowUp':
            console.log("has pulsado hacia arriba");
            let casillaArriba2  = document.getElementsByClassName((pos2[0]- 1)+ 'f')[pos2[1]]; 
            jugador2.classList.remove('actual2');
            casillaArriba2.classList.add('actual2');
            //0 no la toco 1 3f 2 2c 3 objetivo
        break;
        case 'ArrowDown':
            console.log("has pulsado hacia abajo");
            let casillaAbajo2 = document.getElementsByClassName((pos2[0]+ 1)+ 'f')[pos2[1]]; 
            jugador2.classList.remove('actual2');
            casillaAbajo2.classList.add('actual2');
        break;
        case 'ArrowLeft':
            console.log("has pulsado hacia izda");
            let casillaIzda2 = document.getElementsByClassName((pos2[1]- 1)+ 'c')[pos2[0]]; 
            jugador2.classList.remove('actual2');
            casillaIzda2.classList.add('actual2');
        break;
        case 'ArrowRight': 
            console.log("has pulsado hacia derecha");
            let casillaDcha2= document.getElementsByClassName((pos2[1]+ 1)+ 'c')[pos2[0]]; 
            jugador2.classList.remove('actual2');
            casillaDcha2.classList.add('actual2');
        break;
        case 'w':
            console.log("has pulsado hacia arriba");
            let casillaArriba1  = document.getElementsByClassName((pos1[0]- 1)+ 'f')[pos1[1]]; 
            jugador1.classList.remove('actual1');
            casillaArriba1.classList.add('actual1');
            //0 no la toco 1 3f 2 2c 3 objetivo
        break;
        case 's':
            console.log("has pulsado hacia abajo");
            let casillaAbajo1 = document.getElementsByClassName((pos1[0]+ 1)+ 'f')[pos1[1]]; 
            jugador1.classList.remove('actual1');
            casillaAbajo1.classList.add('actual1');
        break;
        case 'a':
            console.log("has pulsado hacia izda");
            let casillaIzda1 = document.getElementsByClassName((pos1[1]- 1)+ 'c')[pos1[0]]; 
            jugador1.classList.remove('actual1');
            casillaIzda1.classList.add('actual1');
        break;
        case 'd': 
            console.log("has pulsado hacia derecha");
            let casillaDcha1= document.getElementsByClassName((pos1[1]+ 1)+ 'c')[pos1[0]]; 
            jugador1.classList.remove('actual1');
            casillaDcha1.classList.add('actual1');
        break;
    }
    //si hay 2 clases en casilla he ganado

    //cada vez que me muevo compruebo si gano
   ganar();
} 
//poner arriba
let divGanar= document.createElement('div');
main.appendChild(divGanar);
function ganar(){
    
    let jugador1 = document.getElementsByClassName('actual1')[0];
    let jugador2 = document.getElementsByClassName('actual2')[0];
   
    // Eliminar evento de teclado cuando hay un ganador.
    if(jugador1.classList.contains('objetivo')){
        console.log("g1");
        divGanar.textContent= "HA GANADO EL PERRO 1";
    }else if(jugador2.classList.contains('objetivo')){
        console.log("g2");
        divGanar.textContent= "HA GANADO EL PERRO 2";
    }
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
/*
/**
 * PENDIENTE:
 * 1. Mover casillas. hecho
 * 2. Que hago con los limites.
 * 3. (colision entre dos jugadores. QUE HAGO).
 * 4. Que hago cuando gano.
 * 5. OBLIGATORIO. Boton reinicio para ejecutar de nuevo la funcion inicio.
 * 6. Contadores para puntuacion??
 * 7. Eliminar evento de teclado cuando hay un ganador.
 * 8. CSS BIEN. hecho
 * 9. OPCIONAL. Contador de tiempo antes de poder iniciar el juego(tablero pintado pero sin posibilidad de ejecutar eventos de teclado)
 */
 
