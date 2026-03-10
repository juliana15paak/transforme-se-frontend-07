const podeAtacar = {
    atacar: function() { console.log(`${this.nome} atacou o inimigo!`) }
}
const podeCurar = {
    curar: function() { console.log(`${this.nome} lançou um feitiço de cura!`) }
}

function criarGuerreiro(nome) {
    const estadoInicial = { nome: nome, classe: "Guerreiro" }
    return Object.assign(estadoInicial, podeAtacar)
}

function criarPaladino(nome) {
    const estadoInicial = { nome: nome, classe: "Paladino" }
    return Object.assign(estadoInicial, podeAtacar, podeCurar)
}
const arthur = criarGuerreiro("Arthur")
arthur.atacar()

const uther = criarPaladino("Uther")
uther.atacar()
uther.curar()