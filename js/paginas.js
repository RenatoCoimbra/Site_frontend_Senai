import card from "./cards.js"
import produto from "./produto.js"

class paginas {
    paginaPrincipal = document.getElementById("pagina")
    cards = new card()
    produtoA = new produto;

    PaginaDeProduto() {
        this.InserirConteudo("<div id='VitrineProdutos'></div>")
        this.cards.CriarCards("VitrineProdutos", "Tenis da Nike", "Produto novo da loja")
        document.getElementsByClassName("card")[0].id = "nike_prod"
        let produto_1 = document.getElementById("nike_prod")
        produto_1.addEventListener('click', this.PaginaDeProduto_Adidas)
    }

    PaginaDeProduto_Adidas() {
        let prod= new produto()
        prod.cardProdutoBasico('tenisAdidas','produto', './img/tenisAdidas.jpg', 'Tênis Adidas', '250,00', '7.5', 'Tênis Adidas original') 

    }
    InserirConteudo(Conteudo) {
        this.paginaPrincipal.innerHTML += Conteudo
    }
}

export default paginas