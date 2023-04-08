let main  = document.getElementsByTagName('main')[0];
let body  = document.getElementsByTagName('body')[0];
let contenedor1 = document.createElement('div');
let button = document.createElement('button');
let divGanar= document.createElement('div');
let contenedor2 =document.createElement('div');
let contadorPuntos1 = document.createElement('div');
let contadorPuntos2 = document.createElement('div');
let cont1 = 0;
let cont2 = 0;
//EVENTO NUEVO: eventlistener('que?', sobre/donde)el body carga completamente
function pintaConsola(){
        /*
    objetivo: corresponde al punto q tengo q llegar  * creootro
    actual: corresponde al punto actual
    */
    let posicionObjetivo = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    let posicionInicio1 =  [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    let posicionInicio2 = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    button.textContent= "Reiniciar";
    button.setAttribute('class','boton');
    button.addEventListener('click', reinicio);
    contenedor1.appendChild(button);
    divGanar.setAttribute('id', 'divGanar');
    contenedor1.setAttribute('class', 'conten1');
   // divGanar.textContent = "No hay ganador";
    contenedor1.appendChild(contadorPuntos1);
    contenedor1.appendChild(contadorPuntos2);

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
            if(i == posicionObjetivo[0] && j == posicionObjetivo[1]){
              div.classList.add('objetivo');
              console.log(div.classList);
              console.log('Estamos en la fila: '+ parseInt(div.classList[1]));
              console.log('estamos en la col: '+ parseInt(div.classList[2]));
              //ver que es esto
            }
            if(i == posicionInicio1[0] && j == posicionInicio1[1]){
                div.classList.add('actual1');
            }
            if(i == posicionInicio2[0] && j == posicionInicio2[1]){
                div.classList.add('actual2');
            }
        }
    }
}
contadorPuntos1.setAttribute('class', 'contador');
contadorPuntos2.setAttribute('class', 'contador');
divGanar.setAttribute('id', 'divGanar');
contenedor1.setAttribute('class', 'conten1');
//document.addEventListener('DOMContentLoaded',pintaConsola);
pintaConsola();
document.addEventListener('keydown', mover);
body.appendChild(contenedor1);
function reinicio(){
        main.textContent = "";
        pintaConsola();
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
            //límites
            if((pos2[0]-1 )!= -1){
                //colisiones
                if(!(pos1[0]==pos2[0]-1 && pos1[1]==pos2[1])){
                    console.log("has pulsado hacia arriba");
                    let casillaArriba2  = document.getElementsByClassName((pos2[0]- 1)+ 'f')[pos2[1]]; 
                    jugador2.classList.remove('actual2');
                    casillaArriba2.classList.add('actual2');
            }  
        }
                
        break;
        case 'ArrowDown':
            if((pos2[0]+1 )!= 10){
                if(!(pos1[0]==pos2[0]+1 && pos1[1]==pos2[1])){
                    console.log("has pulsado hacia abajo");
                    let casillaAbajo2 = document.getElementsByClassName((pos2[0]+ 1)+ 'f')[pos2[1]]; 
                    jugador2.classList.remove('actual2');
                    casillaAbajo2.classList.add('actual2');
                } 
            }
        break;
        case 'ArrowLeft':
            if((pos2[1]-1 )!= -1){
                if(!(pos1[0]==pos2[0] && pos1[1]==pos2[1]-1)){
                    console.log("has pulsado hacia izda");
                    let casillaIzda2 = document.getElementsByClassName((pos2[1]- 1)+ 'c')[pos2[0]]; 
                    jugador2.classList.remove('actual2');
                    casillaIzda2.classList.add('actual2');
                }
            }  
        break;
        case 'ArrowRight': 
        if((pos2[1]+1 )!= 10){
            if(!(pos1[0]==pos2[0] && pos1[1]==pos2[1]+1)){
                console.log("has pulsado hacia derecha");
                let casillaDcha2= document.getElementsByClassName((pos2[1]+ 1)+ 'c')[pos2[0]]; 
                jugador2.classList.remove('actual2');
                casillaDcha2.classList.add('actual2');
            } 
        }
        //jugador 1
        break;
        case 'w':  
            if((pos1[0]-1 )!= -1){ //veo la posición restando una a la que ya hay
                if(!(pos1[0]-1==pos2[0] && pos1[1]==pos2[1])){
                    console.log("has pulsado hacia arriba");
                    let casillaArriba1  = document.getElementsByClassName((pos1[0]- 1)+ 'f')[pos1[1]]; 
                    jugador1.classList.remove('actual1');
                    casillaArriba1.classList.add('actual1');
                }  
            }
        break;
        case 's':
            if((pos1[0]+1 )!= 10){
                if(!(pos1[0]+1==pos2[0] && pos1[1]==pos2[1])){
                    console.log("has pulsado hacia abajo");
                    let casillaAbajo1 = document.getElementsByClassName((pos1[0]+ 1)+ 'f')[pos1[1]]; 
                    jugador1.classList.remove('actual1');
                    casillaAbajo1.classList.add('actual1');
                }                
            }  
        break;
        case 'a':
            if((pos1[1]-1 )!= -1){
                if(!(pos1[0]==pos2[0] && pos1[1]-1==pos2[1])){
                    console.log("has pulsado hacia izda");
                    let casillaIzda1 = document.getElementsByClassName((pos1[1]- 1)+ 'c')[pos1[0]]; 
                    jugador1.classList.remove('actual1');
                    casillaIzda1.classList.add('actual1');
                }   
            }
        break;
        case 'd':
            if((pos1[1]+1 )!= 10){
                if(!(pos1[0]==pos2[0] && pos1[1]+1==pos2[1])){ //colisiones
                    console.log("has pulsado hacia derecha");
                    let casillaDcha1= document.getElementsByClassName((pos1[1]+ 1)+ 'c')[pos1[0]]; 
                    jugador1.classList.remove('actual1');
                    casillaDcha1.classList.add('actual1');
                }
            }    
        break;
    } 
     //si hay 2 clases en casilla he ganado
    //cada vez que me muevo compruebo si gano
    ganar(); 

}   
function ganar(){
    
    let jugador1 = document.getElementsByClassName('actual1')[0];
    let jugador2 = document.getElementsByClassName('actual2')[0];
   
    // Eliminar evento de teclado cuando hay un ganador.
    if(jugador1.classList.contains('objetivo')){
        cont1++;
        divGanar.textContent= "HA GANADO EL LABRADOR";
        divGanar.style.color = "yellow";
        contadorPuntos1.textContent = "LABRADOR: "+cont1;
        reinicio();
       
    }else if(jugador2.classList.contains('objetivo')){
        cont2++;
        divGanar.textContent= "HA GANADO EL PUG";
        divGanar.style.color = "purple";
        contadorPuntos2.textContent = "PUG: "+cont2;
         reinicio();//PONER EL TEXTO
    }
//le meto un contador a cada uno
   
    contenedor1.appendChild(divGanar);
   
}
contenedor1.appendChild(divGanar);

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
 * 2. Que hago con los limites. hecho
 * 3. (colision entre dos jugadores. QUE HAGO). hecho
 * 4. Que hago cuando gano. hecho
 * 5. OBLIGATORIO. Boton reinicio para ejecutar de nuevo la funcion inicio. hecho
 * 6. Contadores para puntuacion
 * 7. Eliminar evento de teclado cuando hay un ganador.hecho
 * 8. CSS BIEN. hecho
 * 9. OPCIONAL. Contador de tiempo antes de poder iniciar el juego(tablero pintado pero sin posibilidad de ejecutar eventos de teclado)no
 */