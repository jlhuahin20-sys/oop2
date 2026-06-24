let products: [string, number, number][] = [
    ["Laptop", 999.99, 10],
    ["Mouse", 19.99, 50],
    ["Keyboard", 49.99, 30]
];
for (let item of products) {
    console.log(
        "Product: " +
        item[0] +
        ", Price: $" +
        item[1] +
        ", Quantity: " +
        item[2]
    );
}