document.addEventListener('DOMContentLoaded', function() {
    var quantities = document.querySelectorAll('[id^="qty"]');
    var checkoutButton = document.querySelector('.checkoutBtn');
    var cashInput = document.getElementById("cash");

    quantities.forEach(function(input) {
        input.addEventListener('input', function() {
            addOrder();
        });
    });

    checkoutButton.addEventListener('click', function() {
        calculateChange();
    });

    function addOrder() {
        var carts = document.getElementById("carts");
        carts.value = ""; // Clear carts textarea

        for (let i = 1; i <= 8; i++) {
            var qtyInput = document.getElementById("qty" + i);
            var productTitle = document.querySelector("#qty" + i).closest(".card-body").querySelector(".card-title").innerText;
            var productPrice = parseFloat(document.getElementById("price" + i).innerText);

            if (qtyInput && qtyInput.value > 0) {
                var order = `${qtyInput.value} pcs x ${productTitle} - ₱${(qtyInput.value * productPrice).toFixed(2)}\n`;
                carts.value += order;
            }
        }

        updateTotal(); // Update total after adding order
    }

    function updateTotal() {
        var total = 0;

        for (let i = 1; i <= 8; i++) {
            var qtyInput = document.getElementById("qty" + i);
            var productPrice = parseFloat(document.getElementById("price" + i).innerText);

            if (qtyInput) {
                total += qtyInput.value * productPrice;
            }
        }

        document.getElementById("total").value = total.toFixed(2); // Update total input
    }

    function calculateChange() {
        var total = parseFloat(document.getElementById("total").value);
        var cash = parseFloat(cashInput.value);
        var change = cash - total;

        document.getElementById("change").value = change.toFixed(2); // Update change input
    }
});
