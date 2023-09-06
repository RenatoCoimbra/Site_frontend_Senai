import Card from './cards.js'

class paginas {
    paginapPrincipal = document.getElementById('pagina')
    paginaDeProduto() {
        this.paginapPrincipal.innerHTML = 'Olá mundo'
        this.inserirConteudo('<div id = "VitrineProdutos"></div>')
        this.cards.criarCards('vitrineProdutos', 'Tênis', 'Produto novo da loja')
    }
    inserirConteudo(conteudo) {
        this.paginapPrincipal.innerHTML += conteudo

    }

}

export default paginas