class produto {
    cardProdutoBasico(produtoId, classeProduto, imagemProduto, nomeProduto, precoProduto) {

        document.getElementsByClassName('localNav')[0].innerHTML += '<h4>Produtos /' + produtoId + '</h4'
        document.getElementById('pagina').innerHTML = ''
        document.getElementById('pagina').innerHTML += '<div id ='+produtoId+'class ='+classeProduto+'>' +
            '<article><img src="' + imagemProduto + '"><h1>' + nomeProduto + '</h1>' +
            '<h3>'+'R$'+precoProduto+'</h3></article>' +
                '</div>'
        document.getElementById('tenisAdidas_01').innerHTML += '<div class="descProduto"> Tênis Adidas</div>'
        document.getElementsByClassName('descProduto')[0].innerHTML += '<h1>Nota dos clentes:7.5</h1>' +
            '<h3>Tênis Adidas original, preto, tamanho 39.'


    }
}

export default produto