function calcularFreteContrato(distanciaKm) {
    let custoTotal = 0
    let taxaFixa = 50

    if (distanciaKm <= 100) {
        // R$2,00 por km para curtas distâncias
        custoTotal = taxaFixa + (distanciaKm * 2)
    } else if (distanciaKm <= 500) {
        // Os primeiros 100km custam 2,00. O restante custa 1,50.
        custoTotal = taxaFixa + (100 * 2) + ((distanciaKm - 100) * 1.5)
    } else {
        // Acima de 500km, o excedente custa apenas 1,20 por km.
        custoTotal = taxaFixa + (100 * 2) + (400 * 1, 5) + ((distanciaKm - 500) * 1.2)
    }
    return `Distância: ${distanciaKm}km | Valor do frete: R$ ${custoTotal.toFixed(2)}`
}

console.log(calcularFreteContrato(80))
console.log(calcularFreteContrato(250))
console.log(calcularFreteContrato(600))