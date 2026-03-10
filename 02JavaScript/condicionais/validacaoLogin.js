let tentativasErradas = 0
let bloqueadoAte = 0

function tentarLogin(senhaDigitada, senhaCorreta) {
    let agora = Date.now()
    if (agora < bloqueadoAte) {
        let segundosRestantes = Math.ceil((bloqueadoAte - agora) / 1000)
        return `Acesso bloqueado! Tente novamente em ${segundosRestantes}.`
    }
    if (senhaDigitada === senhaCorreta) {
        tentativasErradas = 0
        return "Login realizado com sucesso!"
    } else {
        tentativasErradas++
        if (tentativasErradas >= 3) {
            bloqueadoAte = agora + (30 * 1000)
            return `Muitas tentativas! Tente novamente em 30 segundos.`
        }
        return `Senha incorreta! Você tem mais ${3 - tentativasErradas} tentativa(s).`
    }

}

console.log(tentarLogin("123", "secret"))
console.log(tentarLogin("456", "secret"))
console.log(tentarLogin("789", "secret"))
console.log(tentarLogin("secret", "secret"))