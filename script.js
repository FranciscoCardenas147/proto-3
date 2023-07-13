
function calcular(){
    let inputNeto = parseFloat(document.getElementById("neto").value);
    
    let inputPorcentaje = parseFloat(document.getElementById("descuento").value);
    let iva = 19;
    let montoBruto = inputNeto + (inputNeto*(iva /100));  
    let netoAl25 = inputNeto * 2.5;
    let netoAl25menosPorcentaje = netoAl25 -( netoAl25 * (inputPorcentaje / 100));
    document.getElementById("p1").innerHTML = `<b>Precio Venta menos el ${inputPorcentaje}% = ${netoAl25menosPorcentaje}</b>`;
  
    let cantidad = parseInt(document.getElementById("cantidad1").value);

    let masCantidad = netoAl25menosPorcentaje * cantidad;

    document.getElementById("c1").innerHTML = `El precio * ${cantidad} es igual a ${masCantidad}`
  }
  
  
  function calcular2(){ 
    let bruto = parseFloat(document.getElementById("bruto").value);
    console.log(bruto)
    let brutoAl21 = bruto * 2.1;
    let inputPorcentaje2 = parseFloat(document.getElementById("descuento2").value);
    let brutoAl21MenosDescuento = brutoAl21 - (brutoAl21 * (inputPorcentaje2 /100)); 
  document.getElementById("p2").innerHTML = `<b>Precio Venta menos el ${inputPorcentaje2}% = ${brutoAl21MenosDescuento}</b>`;
  
  let cantidad = parseInt(document.getElementById("cantidad2").value);

  let masCantidad = brutoAl21MenosDescuento * cantidad;

  document.getElementById("c2").innerHTML = `El precio * ${cantidad} es igual a ${masCantidad}`
}
  
  function limpiar() {
    location.reload();
  }