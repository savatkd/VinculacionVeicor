function factura(){
    var fecha = new Date()
    var numerodefac = 0;
    var nomcliente = document.getElementById('nombre_cliente').value;
    var idcliente = document.getElementById('nombre_cliente').value;
    var telecliente = document.getElementById('telefonoc').value;
    var direcliente = document.getElementById('direccionc').value;
    var producto;
    var cantidadp = new Number();
    var a = 0;
    var Cantidad;
    var precio = [];
    var i = 0;
    var suma = 0;
    var total = 0;
    var iva;
    var subtotal;
    var pago;
    numerodefac = Math.floor(Math.random()*99);
    document.write('<strong>Numero de factura: </strong>'+numerodefac+'</br>');
    document.write('<strong>Fecha: </strong>');
    document.write(fecha.getDate());
    document.write('/');
    document.write(fecha.getMonth());
    document.write('/');
    document.write(fecha.getFullYear()+'</br>');
    document.write('');
    document.write('<strong>Hora de facuracion: </strong>');
    document.write(fecha.getHours());
    document.write(':');
    document.write(fecha.getMinutes());
    document.write(':');
    document.write(fecha.getSeconds()+'</br>');
    pago = (prompt('Digite su forma de pago. (Tarjeta o Efectivo)'));
    document.write('<strong>Forma de pago: </strong>'+pago);
    document.write('<h1>*----------Datos del cliente----------*</h1>');
    document.write('<strong>Nombre del Cliente: </strong>'+nomcliente+'</br>');
    document.write('<strong>Id del CLiente: </strong>'+idcliente+'</br>');
    document.write('<strong>Direccion del Cliente: </strong>'+direcliente+'</br>');
    document.write('<h1>*----------Productos Adquiridos----------*</h1>');
    /*-Se crea un cliclo para almacenar los datos-*/
    while(i==a){
        producto = prompt('Ingrese Producto');
        cantidadp = prompt('Ingrese la cantidad de '+producto+'.');
        precio[i] = parseInt(prompt('Ingrese precio de producto'));
        document.write('<strong>Producto: </strong>' +producto+'</br>');
        document.write('<strong>Cantidad: </strong>' +cantidadp+'</br>');
        document.write('<strong>Precio: </strong>' +precio[i]+'</br>');
        document.write('<strong>IVA: </strong>' +iva+'</br>');
        document.write('<strong>Total: </strong>'+total+'</br>');
        a = prompt('Para continuar digite "0" y para terminar cualquier numero.');
        suma = suma+precio[i];
        subtotal= cantidadp*suma;
        iva = subtotal*0.12;
        total = subtotal+iva;
    }
    document.write('<h2>----------------------------------------</h2>');
    document.write('<br><h3>IVA: '+iva+'</h3>');
    document.write('<h3>Subtotal: '+subtotal+'</h3>');
    document.write('<h2><br>Total: '+total+'</h2>');
    document.write('<br><button onclick="window.print()">Imprimir</button>');

}   
