import navComponente from './nav.js'
import banner from './banner.js'

let menus = ['Home', 'Produtos', 'Contato']

let nav = new navComponente()
nav.criarNovoMenu('barra_01', menus)
nav.criarBarraNavUsuario('barra_01', 'Home')

let b = new banner()
let bannerInfo = ['<h1>Compra rapida</h1></br><h3>Compre roupa mais rapido</h3>', '<h1>Roupas da moda</h1></br><h3>Compre roupa mais rapido</h3>', '<h1>Melhores ofertas</h1></br><h3>Compre roupa mais rapido</h3>']
b.criarBanner('banner_1')
b.modificaBanner('banner_1', bannerInfo, 0)


let bannerIndex = 0
setInterval(() => {
    if (bannerIndex >= 3) {
        bannerIndex = 0
    }
    b.modificaBanner('banner_1', bannerInfo, bannerIndex)
    bannerIndex += 1
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
b.modificaBanner('banner_1', bannerInfo, bannerIndex)