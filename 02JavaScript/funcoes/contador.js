function novoContador() {
    let contador = 0
    return {
        incrementar: function() {
            contador++
            return contador
        },
        decrementar: function() {
            contador--
            return contador
        },
        getValor: function() {
            return contador
        },
        reset: function() {
            contador = 0
            return contador
        }
    }
}

const meuContador = novoContador()
const outroContador = novoContador()

console.log(meuContador.getValor())
console.log(meuContador.incrementar())
console.log(meuContador.incrementar())
console.log(meuContador.reset())
console.log(outroContador.getValor())