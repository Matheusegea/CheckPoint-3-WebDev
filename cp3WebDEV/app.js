const produtosForm = document.getElementById("produtos")
const precoForm = document.getElementById("preco")
const categoriaProduto = document.getElementById("categoria")
const botaoCadastrar = document.getElementById("botao")
const resultados = document.getElementById("resultados")

botaoCadastrar.addEventListener("click", function(e) {
    e.preventDefault()

    if (produtosForm.value === "" || precoForm.value === "" || categoriaProduto.value === "") {
        alert("Preencha todos os campos")
        return
    }
    let preco = parseFloat(precoForm.value)
    if (preco <= 0) {
        alert("Por favor coloque um preço acima de R$ 0");
        return;
    }

    preco = preco.toFixed(2)


    NovoBloco = document.createElement("div")
    NovoBloco.classList.add("novo-produto")

    const NovoProduto = document.createElement("p")
    NovoProduto.innerHTML = `Produto: ${produtosForm.value}<br> Preço: R$ ${precoForm.value}<br> Categoria: ${categoriaProduto.value}`

    if (categoriaProduto.value === "Tecnologia") {
        NovoProduto.style.fontWeight = "bold"
    } else if (categoriaProduto.value === "Alimentos") {
        NovoProduto.style.backgroundColor = "yellow"
    }

    NovoBloco.appendChild(NovoProduto)
    resultados.appendChild(NovoBloco)

    produtosForm.value = ""
    precoForm.value = ""
    categoriaProduto.value = ""
})