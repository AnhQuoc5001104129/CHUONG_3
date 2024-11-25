function toggleQuantity(product) {
    let qtyInput = document.getElementById(`qty-${product}`);
    let checkBox = document.getElementById(`check-${product}`);
    if (checkBox.checked) {
        qtyInput.disabled = false;
    } else {
        qtyInput.disabled = true;
        qtyInput.value = '';
    }
}
function calculateTotal() {
    let total = 0;
    let vat = document.getElementById('check-vat').checked ? 0.1 : 0;
    const prices = {
        cpu: 120,
        hdd: 130,
        ram: 90,
        rom: 80
    };
    if (document.getElementById('check-cpu').checked) {
        let qty = parseInt(document.getElementById('qty-cpu').value) || 0;
        total += prices.cpu * qty;
    }
    if (document.getElementById('check-hdd').checked) {
        let qty = parseInt(document.getElementById('qty-hdd').value) || 0;
        total += prices.hdd * qty;
    }
    if (document.getElementById('check-ram').checked) {
        let qty = parseInt(document.getElementById('qty-ram').value) || 0;
        total += prices.ram * qty;
    }
    if (document.getElementById('check-rom').checked) {
        let qty = parseInt(document.getElementById('qty-rom').value) || 0;
        total += prices.rom * qty;
    }
    total += total * vat;
    document.getElementById('total-amount').innerText = total.toFixed(2);
}
function resetValues() {
    document.getElementById('check-cpu').checked = false;
    document.getElementById('check-hdd').checked = false;
    document.getElementById('check-ram').checked = false;
    document.getElementById('check-rom').checked = false;
    document.getElementById('check-vat').checked = false;
    document.getElementById('qty-cpu').disabled = true;
    document.getElementById('qty-hdd').disabled = true;
    document.getElementById('qty-ram').disabled = true;
    document.getElementById('qty-rom').disabled = true;
    document.getElementById('total-amount').innerText = '0';
}
function printPage() {
    window.print();
}
