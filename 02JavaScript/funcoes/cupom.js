function aplicarCupom(codigo, valorTotal) {
    if (codigo === "PROMO10") {
        let novoValor = valorTotal * 0.9
        return `Cupom aceito! Novo total: R$${novoValor}`
    } else {
        return `Cupom inválido. Total permanece: R$${valorTotal}`
    }
}

console.log(aplicarCupom("PROMO10", 100))
console.log(aplicarCupom("NATAL20", 100))