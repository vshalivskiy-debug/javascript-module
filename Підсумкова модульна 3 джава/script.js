// Завдання 2 – обробка товарів
function processProducts(products) {

    // Товари в наявності
    const availableProducts = products.filter(product => product.inStock === true);

    // Масив назв товарів у наявності
    const available = availableProducts.map(product => product.name);

    // Сума цін товарів у наявності
    const totalPrice = availableProducts.reduce(
        (sum, product) => sum + product.price,
        0
    );

    // Пошук найдешевшого товару
    let cheapest = undefined;

    if (availableProducts.length > 0) {
        cheapest = availableProducts.reduce((min, product) =>
            product.price < min.price ? product : min
        ).name;
    }

    // Список цін усіх товарів
    const priceList = products.map(
        product => `${product.name} — ${product.price} грн`
    );

    // Повернення результату
    return {
        available,
        totalPrice,
        cheapest,
        priceList
    };
}

// Перевірка роботи
const products = [
    { name: "Чай", price: 50, inStock: true },
    { name: "Кава", price: 120, inStock: false },
    { name: "Цукор", price: 30, inStock: true }
];

console.log(processProducts(products));