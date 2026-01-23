// import { cart, addToCart, renderCart } from "./cart.js";
const ProductsGrid = document.querySelector('.main')
const jsCart = document.querySelector('.cartItems')

// const products = [
//     {
//         url: 'mobile.png',
//         name: 'iPhone 16',
//         title: 'Feature-rich Smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage.',
//         currentPrice: '$999.99',
//         oldPrice: '$1899.99'
//     },
//     {
//         url: 'laptop.png',
//         name: 'Dell XPS 15',
//         title: '15.6-inch FHD Laptop, Intel Core i7, 16GB RAM, 512GB SSD, NVIDIA GTX 1650.',
//         currentPrice: '$1249.99',
//         oldPrice: '$1499.99'
//     },
//     {
//         url: 'headphone.png',
//         name: 'Sony WH-1000XM5',
//         title: 'Wireless Noise-Canceling Over-Ear Headphones with 30-hour battery life.',
//         currentPrice: '$299.99',
//         oldPrice: '$399.99'
//     },
//     {
//         url: 'macbookPro14.png',
//         name: 'MacBook Pro 14"',
//         title: 'Powerful laptop with M2 chip, 16GB RAM, 512GB SSD.',
//         currentPrice: '$1999.99',
//         oldPrice: '$2299.99'
//     },
//     {
//         url: 'smartwatch.png',
//         name: 'Apple Watch Series 9',
//         title: 'Smartwatch with advanced fitness tracking, GPS, and always-on Retina display.',
//         currentPrice: '$449.00',
//         oldPrice: '$499.00'
//     },
//     {
//         url: 'tablet.png',
//         name: 'Samsung Galaxy Tab S9',
//         title: '11-inch Android Tablet with S Pen, 256GB Storage, 8GB RAM.',
//         currentPrice: '$699.99',
//         oldPrice: '$849.99'
//     },
//     {
//         url: 'camera.png',
//         name: 'Canon EOS R10',
//         title: 'Mirrorless Camera with 24.2MP, 4K video, and 18-45mm lens kit.',
//         currentPrice: '$979.00',
//         oldPrice: '$1099.00'
//     },
//     {
//         url: 'earbuds.png',
//         name: 'AirPods Pro 2',
//         title: 'Wireless earbuds with active noise cancellation and MagSafe charging case.',
//         currentPrice: '$219.00',
//         oldPrice: '$249.00'
//     }
// ];


// function addProducts() {
//     let clutter = ''
//     products.forEach((obj) => {
//         clutter += `
//             <div class="prod" data-aos="zoom-in">
//                     <div class="image">
//                         <img src="${obj.url}" alt="${obj.name}">
//                     </div>
//                     <div class="description">

//                         <h2>${obj.name}</h2>
//                         <div class="ratings"></div>
//                         <p>${obj.title}</p>
//                         <div class="price">
//                             <div class="current-price">${obj.currentPrice}</div>
//                             <div class="old-price">${obj.oldPrice}</div>
//                         </div>
//                         <button class="addCart btn">Add To Cart</button>
//                     </div>
//                 </div>
//         `
//         ProductsGrid.innerHTML = clutter;
//     })
// }
// addProducts()
let products = []
let cart = []


async function addProducts() {
    const url = 'https://fakestoreapi.com/products'
    const res = await fetch(url);
    products = await res.json()
    console.log(products);

    let clutter = ''
    products.forEach((obj, index) => {
        clutter += `
            <div class="prod" data-aos="zoom-in">
                    <div class="image">
                        <img src="${obj.image}" alt="${obj.image}">
                    </div>
                    <div class="description">
    
                        
                        <h3 class="productTitle">${obj.title.split(" ").slice(0, 6).join(' ')}</h3>
                        <div class="ratings"></div>
                        <p>
                        ${obj.description.split(" ").slice(0, 15).join(' ')}
                        </p>
                        <div class="price">
                            <div class="current-price">$${obj.price}</div>
                            
                        </div>
                        <button class="addCart btn" data-index="${index}">Add To Cart</button>
                    </div>
                </div>
        `

    })
    ProductsGrid.innerHTML = clutter;

}
addProducts()

// function addCart() {
//     document.addEventListener('click', (e) => {
//         if (e.target.classList.contains('addCart')) {
//             const index = e.target.dataset.index;
//             const product = products[index];
//             cart.push(products[index])
//             console.log(cart);
//             // showCart()
//         }
//     });
// }
// addCart()

// function showCart() {
//     let clutter = ''
//     cart.forEach((obj) => {
//         clutter += `
        
//         <div class="prod">
//                 <div class="image">
//                     <img src="${obj.image}" alt="">
//                 </div>
//                 <div class="description">

//                     <h2>${obj.title}</h2>
//                     <div class="ratings"></div>
//                     <p>${obj.description.split(" ").slice(0, 15).join(' ')}</p>

//                         <div class="current-price">$${obj.price}</div>
//                 </div>
//             </div>
//         `
//     })
//     jsCart.innerHTML = clutter;
// }
// showCart();

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('addCart')) {
        const index = e.target.dataset.index;
        const product = products[index];

        // cart me add karo
        cart.push(product);

        // localStorage me save karo (stringify zaruri hai)
        localStorage.setItem('cart', JSON.stringify(cart));

        console.log(cart);
    }
});





