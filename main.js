const menuNavbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuBurguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

/* Esto se puede simplificar en SIMPLE_1 */ 
menuNavbarEmail.addEventListener('click', toggleDesktopMenu);
menuBurguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

//funcion que me ayuda a cerrar el carrito cuando abro el menu en el mobile, y la misma logica se uso para el toggleMobileMenu, entonces esta fue la primera funcion que hice, luego la de MobileMenu y al final la de DesktopMenmu
function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if ('!isMobileMenuClosed') {
    mobileMenu.classList.add('inactive');
  }

  aside.classList.toggle('inactive');
}

/* SIMPLE_1, Decidi ya no ocuparla porque al darl clic se me desplegaban u ocultaban el aside y el menuNavbarEmail, entonces mejor por separado */  
// menuNavbarEmail.addEventListener('click', toggleMenus);
// menuBurguerIcon.addEventListener('click', toggleMenus);
// aside.addEventListener('click', toggleMenus);

// function toggleMenus() {
//   desktopMenu.classList.toggle('inactive');
//   mobileMenu.classList.toggle('inactive');
//   aside.classList.toggle('inactive');
// }

//Creacion de lista de productos clase 21
const productList = [];   //Arreglo
productList.push({
  name: 'Bike',
  price: '130',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Monitor',
  price: '230',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Computer',
  price: '330',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

   /* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./curso-frontend-developer-javascript-practico/icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> 
    */
   
//Desmenuzar ese codigfo de HTML en JS para crear los productos

function renderProducts(array){
  //Maquetacion del HTML en JS
  for (product of array){
    const productCard = document.createElement('div');  //crea el contenedor div
    productCard.classList.add('product-card');  //agrega ;a c;ase product-card al product-Card (div)
  
    //product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = '$' + product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './curso-frontend-developer-javascript-practico/icons/bt_add_to_cart.svg')
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
   
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);    //manda a llamar la funcion renderProdcuts con la lista (productList) peroe sta lista se puede cambiar por otro nombre de acuerdo a lo que necesites