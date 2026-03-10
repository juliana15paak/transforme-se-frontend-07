function criarContaBancaria(titular) {
    let saldo = 0
    return {
        titular: titular,
        depositar: function(valor) {
            if (valor > 0) saldo += valor
            console.log(`Depósito de R$${valor} realizado.`)
        },
        consultarSaldo: function() {
            return `Saldo atual: R$${saldo}`
        }
    }
}

const conta = criarContaBancaria("João")
conta.depositar(100)
console.log(conta.consultarSaldo())
console.log(conta.saldo)