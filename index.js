
    let tipoDeVehiculo = prompt("Ingrese tipo de vehículo: (opciones disponibles: sedan, suv, deportivo, exotico)");
    let valorPorTipo = ""

        if (tipoDeVehiculo == "sedan") {
            valorPorTipo = 2500;
        }else if(tipoDeVehiculo == "suv"){
            valorPorTipo = 3000;
        }else if(tipoDeVehiculo == "deportivo"){
            valorPorTipo = 4000;
        }else if(tipoDeVehiculo == "exotico"){
            valorPorTipo = 7000;
        }else{
            alert("Este tipo no está dentro de la lista")   
        }
        
    let anioVehiculo = prompt("Ingrese año del vehículo: (opciones disponibles: vehículos del 2011 al 2021");
    let valorPorAnio = ""

       if (anioVehiculo == "2021") {
        valorPorAnio = 1000;
    }else if(anioVehiculo == "2020"){
        valorPorAnio = 900;
    }else if(anioVehiculo == "2019"){
        valorPorAnio = 800;
    }else if(anioVehiculo == "2018"){
        valorPorAnio = 700;
    }else if(anioVehiculo == "2017"){
        valorPorAnio = 600;
    }else if(anioVehiculo == "2016"){
        valorPorAnio = 500;
    }else if(anioVehiculo == "2015"){
        valorPorAnio = 400;
    }else if(anioVehiculo == "2014"){
        valorPorAnio = 300;
    }else if(anioVehiculo == "2013"){
        valorPorAnio = 200;
    }else if(anioVehiculo == "2012"){
        valorPorAnio = 100;
    }else if(anioVehiculo == "2011"){
        valorPorAnio = 50;
    }else{
        alert("Este año no está en la lista")
    }
    
    
    let tipoPlan = prompt("Ingrese tipo de plan deseado: (Opciones disponibles: basico y completo)")
    let valorPorPlan = ""

    if (tipoPlan == "basico") {
        valorPorPlan = 1.5;
    }else if(tipoPlan == "completo"){
        valorPorPlan = 2;
    }else{
        alert("Este tipo de plan no existe")
    }

    function cotizar(numero1, numero2, numero3) {
        resultado = (numero1 + numero2)*numero3
    }

    function mostrar(){
        alert("Su prima de seguros anual asciende al monto de: Q. " + resultado + ". Vehículo tipo: " + tipoDeVehiculo+ ", año del vehículo: " +anioVehiculo+ ", tipo de plan: " +tipoPlan+ "."  )
    }

    cotizar(valorPorTipo, valorPorAnio, valorPorPlan);
    mostrar()


    console.log(tipoDeVehiculo)
    console.log(valorPorTipo)
    console.log(anioVehiculo)
    console.log(valorPorAnio)
    console.log(tipoPlan)
    console.log(valorPorPlan)





