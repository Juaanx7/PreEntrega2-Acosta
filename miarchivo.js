//En primer lugar se le pide al usuario que ingrese el monto a solicitar.
let monto = Number(prompt("Ingrese el monto a solicitar:"));
//Se pide la cantidad de cuotas en quiere devolverlo
let cuotas = Number(prompt("Ingrese la cantidad de cuotas en que quiera pagarlo, como maximo 12"));

let tasaInteres = calculoInteres(cuotas);

let precioCuota = calculoCuotas(monto, tasaInteres, cuotas);

let devolucionTotal = devolucion(precioCuota, cuotas);

//Creo un objeto para almacenar valores del prestamo.
const valores = { montoTotal: devolucionTotal, precioCuota: precioCuota };

//Creo una clase con el constructor de los objetos que almacenara el array.
class valoresDeCuotas {
    constructor(id, valorCuota) {
        this.id = totalCuotas.length + 1;
        this.valorCuota = valorCuota;
    }
}
//Creo un array donde almaceno los objetos con el valor de las cuotas.
const totalCuotas = [];


//Verifico que la cantidad de cuotas seleccionadas sea igual o menor a 12, en el caso de que sean mas, se notificara que supero el numero maximo de cuotas.
if (cuotas <= 12) {
    for (let i = 1; i <= cuotas; i++) {
        //Con esta funcion calculo el interes del prestamo dependiendo la cantidad de cuotas que el usuario solicito.
        calculoInteres(cuotas);
        //Atravez de este alert, se le muestra al usuario el precio de cada cuota atravez de una funcion que calcula el valor de cada una dependiendo el interes      
        alert("Precio cuota " + i + ": " + valores.precioCuota);
        //Agrego el valor de la cuota al array.
        totalCuotas.push(new valoresDeCuotas(i, valores.precioCuota))
        console.log(totalCuotas);

    }

    alert("En total devolvera: " + valores.montoTotal);
    //Verifico que se haya cargado los valores de las cuotas al array
    console.log(totalCuotas.length);
    console.log(totalCuotas[1]);

    //Se le consulta al usuario si quiere ver el valor de una cuota en particular o finalizar el programa.
    const respuestaUsuario = Number(prompt("Desea verificar el valor de una cuota en particular? Ingrese el numero de la cuota o en caso de que desea finalizar el programa ingrese el valor 0"));
    console.log(respuestaUsuario);

    //Este es el metodo ".find" que no me funciona, el cual me serviria para buscar la cuota que el usuario desea ver.
    const resultado = totalCuotas.find((i) => i.id === respuestaUsuario);
    //Con este console.log verifico si se almacena algun valor en la variable "resultado", pero no lo hace.
    console.log(resultado);

    //Verifico que el numero ingresado por el usuario es igual o menor a la cantidad de cuotas que selecciono anteriormente. Tambien se verifica que el numero sea distinto a 0.
    if (resultado <= cuotas && resultado != 0) {
        alert("Precio cuota " + respuestaUsuario + ": " + valores.precioCuota);
    } else {
        alert("Adios!")
    }
} else {
    alert("supero el maximo de cuotas permitido!");
}

//Calcula el interes de acuerdo las cuotas solicitadas.
function calculoInteres(cuotas) {
    let tasaInteres = 0;
    if (cuotas <= 3) {
        tasaInteres = 30;
    } else if (cuotas <= 6) {
        tasaInteres = 60;
    } else if (cuotas <= 12) {
        tasaInteres = 90;
    }

    return tasaInteres;
}

//Calcula el precio de cada cuota.
function calculoCuotas(monto, tasaInteres, cuotas) {
    let interes = tasaInteres * 100;
    let precioCuota = (monto + interes) / cuotas;
    return precioCuota;
}

//Calcula el monto total que el usuario debe devolver.

function devolucion(precioCuota, cuotas) {
    let total = precioCuota * cuotas
    return total
}
