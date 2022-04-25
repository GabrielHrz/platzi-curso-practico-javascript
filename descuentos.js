//const precioOriginal = 120;
//const descuento = 18;


function calcularPrecioConDescuento(precio,descuento){

const porcentajePrecioConDescuento = 100-descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

return precioConDescuento;


}

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento

});*/

function onClickButtonPriceDiscount(){
  const inputPrice = document.getElementById("input_price");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("input_discount");
  const discount = inputDiscount.value;

  const precioCondecuento = calcularPrecioConDescuento(priceValue,discount);
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento es: "+ precioCondecuento;
}

