var products = [
    { id: 1, name: "Affogato", price: 150.00 },
    { id: 2, name: "Coffee Choco", price: 95.00 },
    { id: 3, name: "Cappuccino", price: 190.00 },
    { id: 4, name: "Americano Coffee", price: 180.00 },
    { id: 5, name: "Caffe Mocha", price: 230.00 },
    { id: 6, name: "Coffee Caramel", price: 160.00 },
    { id: 7, name: "Iced Coffee Creamcial", price: 335.00 }
];


var qtyInputs = document.querySelectorAll('[id^="qty"]');
var carts = document.getElementById("carts");
var totalInput = document.getElementById("total");
var cashInput = document.getElementById("cash");
var changeInput = document.getElementById("change");


qtyInputs.forEach(function(qtyInput) {
    qtyInput.addEventListener("input", addOrder);
});

cashInput.addEventListener("input", calculateChange);


function addOrder() {
    carts.textContent = ""; // Clear previous cart content

    var total = 0;

    qtyInputs.forEach(function(qtyInput, index) {
        var qty = parseFloat(qtyInput.value);
        if (qty > 0) {
            var product = products[index];
            var order = qty + " pcs x " + product.name + " - Php " + (qty * product.price).toFixed(2) + "\n";
            carts.textContent += order;
            total += qty * product.price;
        }
    });

    totalInput.value = total.toFixed(2); // Update total
    calculateChange(); // Recalculate change
}


function calculateChange() {
    var total = parseFloat(totalInput.value);
    var cash = parseFloat(cashInput.value);

    if (!isNaN(total) && !isNaN(cash)) {
        var change = cash - total;
        changeInput.value = change.toFixed(2);
    } else {
        changeInput.value = "";
    }
}
