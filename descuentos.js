function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function OnClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const priceDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, priceDiscount);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son $" + precioConDescuento; 
}
