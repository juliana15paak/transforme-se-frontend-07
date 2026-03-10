let ecommerce = {
  nome: "Loja de Computadores",
  produtos: [
    {
      id: 1,
      nome: "Pendrive 32GB",
      preco: 65.30,
      categorias: ["Eletrônicos", "Dispositivos", "Hardware", "Armazenamento"],
      estoque: 20
    },
    {
      id: 2,
      nome: "Teclado",
      preco: 125.50,
      categorias: ["Eletrônicos", "Dispositivos", "Hardware"],
      estoque: 15
    },
    {
      id: 3,
      nome: "Bíblia do Programador",
      preco: 387.64,
      categorias: ["Livros"],
      estoque: 1
    },
  ],

  encontrarProduto(id){
    return this.produtos.find(produto => produto.id === id)
  },
  produtosPorCategoria(categoria){
    return this.produtos.filter(produto => produto.categorias.includes(categoria))
  },
  valorTotalEstoque(){
    return this.produtos.reduce((total, produto) => {
      return total + (produto.preco * produto.estoque)
    }, 0)
  }
}
console.log(ecommerce.encontrarProduto(3))
console.log(ecommerce.produtosPorCategoria("Dispositivos"))
console.log(ecommerce.valorTotalEstoque())