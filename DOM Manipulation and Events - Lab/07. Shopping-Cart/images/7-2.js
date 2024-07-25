function solve() {
    const textareaResult = document.querySelector('textarea');
    const checkoutButton = document.querySelector('.checkout');
    const allProductsButtons = document.querySelectorAll('.add-product');

    const cartProducts = new Set();
    let totalMoney = 0;

    allProductsButtons.forEach(button => button.addEventListener('click', () => {
        const product = button.closest('.product');
        const productName = product.querySelector('.product-title').textContent;
        const productPrice = +product.querySelector('.product-line-price').textContent;

        cartProducts.add(productName);
        totalMoney += productPrice;

        textareaResult.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
    }));

    checkoutButton.addEventListener('click', () => {
        textareaResult.textContent += `You bought ${[...cartProducts].join(', ')} for ${totalMoney.toFixed(2)}.`;
        document.querySelectorAll('button').forEach(btn => btn.disabled = true);
    });
}
