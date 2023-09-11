const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');//para el flujo
const MAN = document.getElementById('man');//para el mantenimiento
const MAN1= document.getElementById('man1');//para el sc de 1500
const MAN2 = document.getElementById('man2');//para el sc de 2000


//cuando el usuario presione el boton se realizara los calculos dependiendo del peso ingresado
CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    console.log('dato ingresado: ', DATO)
       //validamos que se cargue un dato:
       //lo siguiente es para resetear los resultados
       FLU.innerHTML = '';
       MAN.innerHTML = '';
       MAN1.innerHTML = '';
       MAN2.innerHTML = '';
       //para el metodo Holliday-Segar
       //uso toFixed para que no me salga con tantos decimales
    if (DATO>0 && DATO<=30){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo.toFixed(2) + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento.toFixed(2) + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        //para el metodo superficie corporal
        //uso toFixed para que no me salga con tantos decimales
    }else if (DATO>30){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento1 = flujo.toFixed(2);
        let mantenimiento2 = flujo.toFixed(2);    
        MAN1.innerHTML = mantenimiento1*1500 + ' con 1500 SC';
        MAN2.innerHTML = mantenimiento2*2000 + ' con 2000 SC';
        MAN1.style.display = 'block';
        MAN2.style.display = 'block';
    }else {
    ERROR.style.display = 'block';
    FLU.style.display = 'none';
    MAN.style.display = 'none';
    MAN1.style.display = 'none';
    MAN2.style.display = 'none';
    }
})

//funcion para calcular hacer nuestros calculos
function calcFlujo(peso){
    let flujo;
    if(peso<=10){
        flujo= (100*peso)/24;
    }
    if(peso>=11 && peso<=20){
        peso=peso-10;
        flujo=(50*peso + 1000)/24;
    }
    if(peso>21 && peso<=30){
        peso=peso-20;
        flujo=(peso*20 + 1000 + 500)/24;
        
    }   
    if(peso>30){
        flujo= (( (peso* 4) + 7) / (parseInt(peso) + 90));
    }  
    return flujo;
}
