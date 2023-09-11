import navComponente from './nav.js'
import banner from './banner.js'
import Card from './cards.js'
import paginas from './paginas.js'

let pag = new paginas()

function mainPage (){


let menus = ['Home', 'Produtos', 'Contato']
let nav = new navComponente()
let CardProduto = new Card()


nav.criarNovoMenu('barra_01', menus)
nav.criarBarraNavUsuario('barra_01', 'Home')

let b = new banner()
let bannerInfo = ['<h1>Compra rapida</h1></br><h3>Compre roupa mais rapido</h3>', '<h1>Roupas da moda</h1></br><h3>Compre roupa mais rapido</h3>', '<h1>Melhores ofertas</h1></br><h3>Compre roupa mais rapido</h3>']
b.criarBanner('banner_1')
b.modificaBanner('banner_1', bannerInfo, 2)


let bannerIndex = 0
let bannerTime = setInterval(() => {
    try {

        if (bannerIndex >= 3) {
            bannerIndex = 0
        }
        b.modificaBanner('banner_1', bannerInfo, bannerIndex)
        bannerIndex += 1
    }
    catch{
        console.log('banner foi paradoo por algum erro!')
        clearInterval(bannerTime)
    }
}, 3000)

document.getElementById('btBannerProximo').addEventListener('click', () => {
    if (bannerIndex >= 2) {
        bannerIndex = 0
    } else {
        bannerIndex += 1
    }
    b.modificaBanner('banner_1', bannerInfo, bannerIndex)
})

document.getElementById('btBannerAnterior').addEventListener('click', () => {
    if (bannerIndex <= 0) {
        bannerIndex = 2
    } else {
        bannerIndex -= 1
    }
    b.modificaBanner('banner_1', bannerInfo, bannerIndex)
})


CardProduto.EscolherTipo("card sb")
CardProduto.CriarCards("PortaCard1", "Tênis Adidas", "é um tênis de alta performance")
CardProduto.CriarCards("PortaCard1", "Tênis Nike", "é um tênis de alta performance")

let CardVenda = new Card()
CardVenda.EscolherTipo("cardProduto sb")
CardVenda.CriarCards("PortaCard1", "Produto a venda", "Venda do produto")

}

mainPage()

function produtosPage() {
    let pagina = document.getElementById('pagina')
    pagina.innerHTML = ''
    document.getElementsByClassName("localNav")[0].getElementsByTagName("h4")[0].innerHTML = "Produtos"
    pag.PaginaDeProduto()
}
let HomeMenu = document.getElementById("menu_02").getElementsByTagName("li")[0].getElementsByTagName("a")[0]
HomeMenu.addEventListener("click",()=>{
    window.location.reload()
})

let ProdutoMenu = document.getElementById("menu_02").getElementsByTagName("li")[1].getElementsByTagName("a")[0]
ProdutoMenu.addEventListener("click",produtosPage)