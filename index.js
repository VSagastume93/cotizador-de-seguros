let tipoDeVehiculo;
let anioVehiculo;
let tipoPlan;


/**
 * 1. Pedir el tipo de vehiculo y realizar cálculo por tipo de carro
 * 2. Calcular el valor por el anio dependiendo del tipo de vehiculo
 */



function realizarCotizacion() {
    const valorPorTipoVehiculo = calcularValorPorTipoVehiculo();
    const valorPorAnio = calcularPocentajePorAnio(valorPorTipoVehiculo);
    const porcentajePorPlan = calcularPorcentajePlan();

    mostrarCalculos(valorPorAnio, porcentajePorPlan);
}

function calcularValorPorTipoVehiculo() {
    tipoDeVehiculo = prompt("Ingrese tipo de vehículo: (opciones disponibles: sedan, suv, deportivo, exotico)");
    let valorPorTipoVehiculo = 0;
    if (tipoDeVehiculo.toLowerCase() == "sedan") {
        valorPorTipoVehiculo = 2500;
    } else if (tipoDeVehiculo.toLowerCase() == "suv") {
        valorPorTipoVehiculo = 3000;
    } else if (tipoDeVehiculo.toLowerCase() == "deportivo") {
        valorPorTipoVehiculo = 4000;
    } else if (tipoDeVehiculo.toLowerCase() == "exotico") {
        valorPorTipoVehiculo = 7000;
    } else {
        alert("Ingresa un tipo de vehiculo correcto");
        calcularValorPorTipoVehiculo();
    }

    console.log(valorPorTipoVehiculo)
    return valorPorTipoVehiculo;
}

function calcularPocentajePorAnio(valorPorTipoVehiculo) {
    anioVehiculo = prompt("Ingrese año del vehículo: (opciones disponibles: vehículos del 2011 al 2021");
    if (anioVehiculo == "2021") {
        valorPorAnio = 1.55 * valorPorTipoVehiculo;
    } else if (anioVehiculo == "2020") {
        valorPorAnio = 1.50 * valorPorTipoVehiculo;
    } else if (anioVehiculo == "2019") {
        valorPorAnio = 1.45 * valorPorTipoVehiculo;
    } else if (anioVehiculo == "2018") {
        valorPorAnio = 1.40 * valorPorTipoVehiculo;
    } else if (anioVehiculo == "2017") {
        valorPorAnio = 1.35 * valorPorTipoVehiculo;
    } else if (anioVehiculo == "2016") {
        valorPorAnio = 1.30 * valorPorTipoVehiculo;
    } else if (anioVehiculo == "2015") {
        valorPorAnio = 1.25 * valorPorTipoVehiculo;
    } else if (anioVehiculo == "2014") {
        valorPorAnio = 1.20 * valorPorTipoVehiculo;
    } else if (anioVehiculo == "2013") {
        valorPorAnio = 1.15 * valorPorTipoVehiculo;
    } else if (anioVehiculo == "2012") {
        valorPorAnio = 1.10 * valorPorTipoVehiculo;
    } else if (anioVehiculo == "2011") {
        valorPorAnio = 1.05 * valorPorTipoVehiculo;
    } else {
        alert("Este año no está en la lista");
        calcularPocentajePorAnio(valorPorTipoVehiculo);
    }

    console.log(valorPorAnio);
    return valorPorAnio;
}

function calcularPorcentajePlan() {
    tipoPlan = prompt("Ingrese tipo de plan deseado: (Opciones disponibles: basico y completo)")
    let valorPorPlan = ""

    if (tipoPlan == "basico") {
        valorPorPlan = 1.5;
    } else if (tipoPlan == "completo") {
        valorPorPlan = 2;
    } else {
        alert("Este tipo de plan no existe")
        calcularPorcentajePlan();
    }

    return valorPorPlan;
}


function mostrarCalculos(valorPorAnio, porcentajePorPlan) {
    const valorPrima = (valorPorAnio * porcentajePorPlan).toLocaleString('en-US', {maximumFractionDigits:2});
    alert("Su prima de seguros anual asciende al monto de: Q. " + valorPrima + ". Vehículo tipo: " + tipoDeVehiculo + ", año del vehículo: " +anioVehiculo+ ", tipo de plan: " +tipoPlan+ ".")
}



realizarCotizacion();





