//obtiene la diferencia de los años
export function obtenerDiferenciaYear(year){

    return new Date().getFullYear() -year
}

//calcula el incremento del seguro segun la marca

export function calcularMarca(marca){
    let incremento

    switch (marca) {
        case 'americano':
            incremento=1.30
            break;
        case 'europeo':
            incremento=1.30
            break;
        case 'asiatico':
            incremento=1.05
            break;
    
        default:
            break;
    }

    return incremento
}

//calcula el tipo de seguro

export function calcularPlan(plan){
    return (plan==='basico')? 1.20 : 1.50 ;
}

export function primeraMayuscular (texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}