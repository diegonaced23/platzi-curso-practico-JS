const cupones = [
  { name: "black_friday", discount: 35 },
  { name: "cyber_monday", discount: 20 },
  { name: "summer_vibes", discount: 15 },
  { name: "quarantine", discount: 25 },
  { name: "half_price", discount: 50 },
];

function cuponesConDescuento() {
  const inputPrice = document.getElementById("precio");
  const priceValue = inputPrice.value.replace(/\./g,'');
 
  const inputCoupon = document.getElementById("cupon");
  const cuponValue = inputCoupon.value;

  const validarCupon = function (cupones) {
    return cupones.name == cuponValue;  
  };

  const usuarioCupon = cupones.find(validarCupon);

  if (!usuarioCupon) {
    alert("El cupón " + cuponValue + " no es válido");
  } else {
    const descuento = usuarioCupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    document.getElementById("precioFinal").innerHTML = precioConDescuento;
  }

}

function calcularPrecioConDescuento(priceValue, descuento) {
  const value_descuento_final = descuento / 100;
  const precio_descuento = priceValue * value_descuento_final;
  const precioFinal = priceValue - precio_descuento;

  return new Intl.NumberFormat('es-ES').format(precioFinal);
}

function precioDescuento() {
  const precio = document.getElementById("precio");
  // const value_precio1 = Number(precio.value);
  const value_precio = precio.value.replace(/\./g,'');

  const descuento = document.getElementById("descuento");
  const value_descuento = Number(descuento.value);

  if (value_descuento != "") {
    const value_descuento_final = value_descuento / 100;
    const precio_descuento = value_precio * value_descuento_final;
    const precio_final = value_precio - precio_descuento;

    const precio_final_formato = new Intl.NumberFormat('es-ES').format(precio_final);

    document.getElementById("precioFinal").innerHTML = "$ " + precio_final_formato;
  }
}

function separadorMiles(input) {
  var num = input.value.replace(/\./g,'');
  if(!isNaN(num)){
    num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
    num = num.split('').reverse().join('').replace(/^[\.]/,'');
    input.value = num;
  }

}

function cambiarDiv() {
  var isChecked=document.getElementById("flexSwitchCheckDefault").checked;
  console.log(isChecked);
  if (!isChecked) {
    document.getElementById("section_descuento").style.display = "block";
    document.getElementById("section_cupon").style.display = "none";
  } else {
    document.getElementById("section_descuento").style.display = "none";
    document.getElementById("section_cupon").style.display = "block";
  }
  
}