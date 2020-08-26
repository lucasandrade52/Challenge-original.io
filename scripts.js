const Product = {
    shoes: {
        name: 'Bolsa de mão',
        image: './images/prod01.png'
    },
    shoestwo: {
        name: 'Rasteira Tira Dedo',
        image: './images/prod02.png'
    },
    shoesthree: {
        name: 'Bolsa Tressê Rolotê',
        image: './images/prod03.png'
    },
    shoesfour: {
        name: 'Rasteira',
        image: './images/prod04.png'
    },
}

const products = document.querySelectorAll('.carrousel')

products.forEach(product => {

    const infor = Product [ product.id ]

    product.addEventListener('click', function() {
        const modal = document.querySelector('.modal')
        modal.style.display = 'flex';

        modal.innerHTML = `
        <div class="content-modal">
        <div class="close">
            <span><img class="icon-close" src="./images/close.png"></span>
        </div>
        <div class="modal_addproduct">
            <img src= "${infor.image}" alt="image of ${infor.name}">
        </div>
        <h2>Produto adicionado com Sucesso!</h2>      
        <div class="modal_button">
            <button type="submit">Finalizar Compra</button>
            <a href="#" class="keepbuy">Continuar Comprando</a>
        </div>
    </div>
        `
    })
})

document.addEventListener('click', function() {
    if (event.target.classList.contains('icon-close')) {
        document.querySelector('.modal').style.display = 'none'
    }
})