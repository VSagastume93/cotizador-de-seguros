const sedan = document.getElementById("sedan");
const suv = document.getElementById("suv");
const deportivo = document.getElementById("deportivo");
const exotico = document.getElementById("exotico");
const anio = document.getElementById("year");
const planBasico = document.getElementById("radioBasico");
const planCompleto = document.getElementById("radioCompleto");
let botonCotizar = document.getElementById("cotizar")

sedan.addEventListener("click", activarSeleccionSedan);
suv.addEventListener("click", activarSeleccionSuv);
deportivo.addEventListener("click", activarSeleccionDeportivo);
exotico.addEventListener("click", activarSeleccionExotico);
botonCotizar.addEventListener("click", realizarCotizacion);

function realizarCotizacion(){
    
}

function activarSeleccionSedan(){

    if (sedan.classList.contains("car-active")){
        sedan.classList.remove("car-active")
    }else{
        sedan.classList.add("car-active")
    }

    suv.classList.remove("car-active");
    deportivo.classList.remove("car-active");
    exotico.classList.remove("car-active")

}

function activarSeleccionSuv(){

    if (suv.classList.contains("car-active")){
        suv.classList.remove("car-active")
    }else{
        suv.classList.add("car-active")
    }

    sedan.classList.remove("car-active");
    deportivo.classList.remove("car-active");
    exotico.classList.remove("car-active")

}

function activarSeleccionDeportivo(){

    if (deportivo.classList.contains("car-active")){
        deportivo.classList.remove("car-active")
    }else{
        deportivo.classList.add("car-active")
    }

    suv.classList.remove("car-active");
    sedan.classList.remove("car-active");
    exotico.classList.remove("car-active")

}

function activarSeleccionExotico(){

    if (exotico.classList.contains("car-active")){
        exotico.classList.remove("car-active")
    }else{
        exotico.classList.add("car-active")
    }

    suv.classList.remove("car-active");
    deportivo.classList.remove("car-active");
    sedan.classList.remove("car-active")

}