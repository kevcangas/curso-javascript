const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const productDetailMain = document.querySelector('.product-detail-main')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenuIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarrito)
productDetailCloseIcon.addEventListener('click', closeProductDetailMain)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    productDetail.classList.add('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    productDetail.classList.add('inactive')
    productDetailMain.classList.add('inactive')
}

function toggleCarrito() {
    productDetail.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetailMain.classList.add('inactive')
}

function openProductDetailMain() {
    productDetailMain.classList.remove('inactive')
    productDetail.classList.add('inactive')
    mobileMenu.classList.add('inactive')
}

function closeProductDetailMain() {
    productDetailMain.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 5200,
    img: 'https://www.lg.com/mx/images/televisores/md07555132/gallery/D-3.jpg',
})
productList.push({
    name: 'Silla',
    price: 3999,
    img: 'https://m.media-amazon.com/images/I/61MS+ZiZWvL._AC_SX466_.jpg',
})

function renderProducts(list){
    for (product of list){
        const productCard = document.createElement('div')
        productCard.addEventListener('click', openProductDetailMain)
        productCard.classList.add('product-card')

        const img = document.createElement('img')
        img.setAttribute('src', product.img)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price.toString()

        const productName = document.createElement('p')
        productName.innerText = product.name

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
        
        productInfoFigure.appendChild(productImgCart)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(img)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)