
function cambia_cremas(listindex)
{

document.tortas.cremas.options.length = 0;
switch (listindex)
{

case "ESTANDAR" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("8 PORCIONES","8 PORCIONES");
document.tortas.cremas.options[2]=new Option("15 PORCIONES","15 PORCIONES");
document.tortas.cremas.options[3]=new Option("22 PORCIONES","22 PORCIONES");
document.tortas.cremas.options[4]=new Option("28 PORCIONES","28 PORCIONES");

break;

case "ROGEL" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("13 CM","13 CM");
document.tortas.cremas.options[2]=new Option("22 CM","22 CM");
document.tortas.cremas.options[3]=new Option("30 CM","30 CM");
  
break;

case "CHAJA" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("12 PORCIONES","12 PORCIONES");
document.tortas.cremas.options[2]=new Option("20 PORCIONES","20 PORCIONES");
document.tortas.cremas.options[3]=new Option("25 PORCIONES","25 PORCIONES");

break;

case "SELVA NEGRA" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("8 PORCIONES","8 PORCIONES");
document.tortas.cremas.options[2]=new Option("15 PORCIONES","15 PORCIONES");
document.tortas.cremas.options[3]=new Option("22 PORCIONES","22 PORCIONES");

break;

case "MOCCA" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("12 PORCIONES","12 PORCIONES");
document.tortas.cremas.options[2]=new Option("20 PORCIONES","20 PORCIONES");
document.tortas.cremas.options[3]=new Option("25 PORCIONES","25 PORCIONES");

break;
}
return true;
}

 //RELLENOS CON BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 10 PORCIONES

 function precio(){
   
  let listacremas = document.querySelector("#listacremas").value;
  let cremas = document.querySelector("#cremas").value;  0
   
  
if(listacremas == "ESTANDAR" && cremas == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$27900";
}
else if (listacremas == "ESTANDAR" && cremas == "15 PORCIONES"){
  document.getElementById("salida").innerHTML = "$39500";
}
else if (listacremas == "ESTANDAR" && cremas == "22 PORCIONES"){
  document.getElementById("salida").innerHTML = "$49600";
}
else if (listacremas == "ROGEL" && cremas == "13 CM"){
  document.getElementById("salida").innerHTML = "$29100";
}
else if (listacremas == "ROGEL" && cremas == "22 CM"){
  document.getElementById("salida").innerHTML = "$52600";
}
else if (listacremas == "ROGEL" && cremas == "30 CM"){
  document.getElementById("salida").innerHTML = "$75800";
}
else if (listacremas == "CHAJA" && cremas == "12 PORCIONES"){
  document.getElementById("salida").innerHTML = "$31500";
}
else if (listacremas == "CHAJA" && cremas == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$42200";
}
else if (listacremas == "CHAJA" && cremas == "25 PORCIONES"){
  document.getElementById("salida").innerHTML = "$52400";
}
else if (listacremas == "SELVA NEGRA" && cremas == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$39800";
}
else if (listacremas == "SELVA NEGRA" && cremas == "15 PORCIONES"){
  document.getElementById("salida").innerHTML = "$55200";
}
else if (listacremas == "SELVA NEGRA" && cremas == "22 PORCIONES"){
  document.getElementById("salida").innerHTML = "$70300";
}
else if (listacremas == "MOCCA" && cremas == "12 PORCIONES"){
  document.getElementById("salida").innerHTML = "$55000";
}
else if (listacremas == "MOCCA" && cremas == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$78850";
}
else if (listacremas == "MOCCA" && cremas == "25 PORCIONES"){
  document.getElementById("salida").innerHTML = "$102100";
}
else if (listacremas == "MOCCA"){
  document.getElementById("des1").innerHTML = "BIZCOCHUELO DE CHOCOLATE<br><br>2 RELLENOS:<br><br>1- DULCE DE LECHE REPOSTERO<br><br>2- CREMA MOCCA<br><br>DECORACION: CREMA MOCCA CON DRIP DE CHOCOLATE";
  imagenTorta.innerHTML = '<img src="mocca.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "SELVA NEGRA"){
  document.getElementById("des1").innerHTML = "BIZCOCHUELO DE CHOCOLATE<br><br>RELLENO: CREMA DE LECHE CON FRUTOS ROJOS<br><br>DECORACION: CREMA DE LECHE CON CHOCOLATE Y FRUTOS ROJOS";
  imagenTorta.innerHTML = '<img src="selvanegra.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "CHAJA"){
  document.getElementById("des1").innerHTML = "BIZCOCHUELO DE VAINILLA<br><br>2 RELLENOS:<br><br>1- DULCE DE LECHE REPOSTERO CON MERENGUITOS<br><br>2- CREMA DE LECHE CON DURAZNO<br><br>DECORACION: MERENGUE CON MERENGUITOS";
 imagenTorta.innerHTML = '<img src="chaja.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "ROGEL"){
  document.getElementById("des1").innerHTML = "MASA TIPO HOJALDRE<br><br>DULCE DE LECHE REPOSTERO<br><br>MERENGUE ITALIANO";
  imagenTorta.innerHTML = '<img src="rogelf.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "ESTANDAR"){
  document.getElementById("des1").innerHTML = "BIZCOCHUELO DE VAINILLA<br><br>RELLENO: COMBINADO DE DULCE DE LECHE REPOSTERO CON CREMA DE LECHE<br><br>DECORACION: MERENGUE ITALIANO";
  imagenTorta.innerHTML = '<img src="estandar.jpg" alt="Torta Rogel" class="imgTorta" />';
}

else{}
}

document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();
    
  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "5493814782259";

  let cliente = document.querySelector("#cliente").value;
  let listacremas = document.querySelector("#listacremas").value;
  let cremas = document.querySelector("#cremas").value;
  let fechas = document.querySelector("#fechas").value;
  let horario = document.querySelector("#horario").value;
  let salida = document.querySelector("#salida").innerHTML;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		--DOLCE TENTAZIONE SIN TACC--%0A
		*PEDIDO*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A%0A
		*Indica el tipo de torta*%0A
		${listacremas}%0A%0A
		*Indica el tamaño de la torta*%0A
		${cremas}%0A%0A
    *FECHA DE ENTREGA*%0A
		${fechas}%0A%0A
    *HORARIO*%0A
		${horario}%0A%0A
    *Precio*%0A
		${salida}%0A%0A`;

  if (cliente === "" || listacremas === "" || cremas === "" || fechas === "" || horario === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
