    // 13. The Shopping Cart Totalizer:
    //     You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.Here's a JavaScript function named `calculateTotal` that takes an array of products, each with a price and quantity, and returns the total cost of the items in the shopping cart:

    function calculateTotal(cart){
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].quantity;
        }
        return total;
    }

    let shoppingCart = [
        { name: "pen", price: 10, quantity: 2 },
        { name: "copy", price: 30, quantity: 1 },
        { name: "shopner", price: 5, quantity: 1 },
        { name: "eraser", price: 5, quantity: 1 },
        { name: "pencil", price: 5, quantity: 1 }
    ];
    
    console.log(calculateTotal(shoppingCart)); // Returns 55

    document.body.innerHTML = `<h4>all items are </h4> <p>${shoppingCart.map(item => `${item.name}: ${item.quantity} x Rs.${item.price}`).join('<br>')}</p><p><strong>Total: Rs.${calculateTotal(shoppingCart)}</strong></p>`