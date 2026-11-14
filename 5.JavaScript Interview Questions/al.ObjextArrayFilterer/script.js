// 11. The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter critereria. Each product object has properties like name, category, price, and rating.

function filterProducts(products, filterCriterion) {
    return products.filter((product) => product.category === filterCriterion);
}

async function main() {
    let allProducts = [
        { name: "Nike Shoes", category: "Shoes", price: 800, rating: 4.5 },
        { name: "Adidas Shoes", category: "Shoes", price: 800, rating: 4.5 },
        { name: "Campus Shoes", category: "Shoes", price: 800, rating: 4.5 },
        { name: "Puma Shoes", category: "Shoes", price: 1500, rating: 4.2 },
        { name: "Puma Shoes", category: "Shoes", price: 3000, rating: 4.2 },
        { name: "T-Shirt", category: "Clothes", price: 500, rating: 4.0 },
        { name: "T-Shirt", category: "Clothes", price: 5000, rating: 4.0 },
        { name: "Shirt", category: "Clothes", price: 5000, rating: 4.0 },
        { name: "Shirt", category: "Clothes", price: 1000, rating: 4.0 },
        { name: "Adidas Shoes", category: "Shoes", price: 1000, rating: 4.8 }
    ];

    let filteredProducts = filterProducts(allProducts, "Shoes" );
    console.log(filteredProducts);
}

main();