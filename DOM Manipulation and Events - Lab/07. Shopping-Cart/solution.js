function solve() {
    const textareaResult = document.querySelector('textarea');
    const checkoutButton = document.querySelector('.checkout');
    const allProductsButtons = document.querySelectorAll('.add-product');

    let cartProducts = new Set();
    let totalMoney = 0;

    allProductsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentNode.parentNode;
            const productName = product.querySelector('.product-title').textContent;
            const productPrice = Number(product.querySelector('.product-line-price').textContent);

            cartProducts.add(productName);
            totalMoney += productPrice;

            textareaResult.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
        });
    });

    checkoutButton.addEventListener('click', () => {
        textareaResult.textContent += `You bought ${Array.from(cartProducts).join(', ')} for ${totalMoney.toFixed(2)}.`;

        document.querySelectorAll('button').forEach(button => {
            button.disabled = true;
        });
    });
}
