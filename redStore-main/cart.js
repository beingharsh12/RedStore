const jsCart2 = document.querySelector('.cartItems');

let cart2 = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    let clutter = '';
    cart2.forEach((obj) => {
        clutter += `
            <div class="prod">
                <div class="image">
                    <img src="${obj.image}" alt="">
                </div>
                <div class="description">
                    <h3>${obj.title.split(" ").slice(0, 6).join(" ")}</h3>
                    <p>${obj.description.split(" ").slice(0, 15).join(" ")}</p>
                    <div class="current-price">$${obj.price}</div>
                </div>
            </div>
        `;
    });
    jsCart2.innerHTML = clutter;
}

renderCart();
console.log(cart2)
