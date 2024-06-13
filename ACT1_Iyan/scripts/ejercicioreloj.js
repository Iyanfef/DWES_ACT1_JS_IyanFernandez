function formateaHora(fecha){
    var hora= fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();
     //comprobar que la hora tenga dos digitos
     hora = hora < 10? '0' + hora : hora;
     minuto = minuto < 10? '0' + minuto : minuto;
     segundo = segundo < 10 ? '0' + segundo :segundo;
 
     //pasar el tiempo a cadena y devolverlo
     return horaActual = hora +":" +minuto +":" +segundo;
}

function tiempoVacaciones(fechaFin) {
    var ahora = new Date();
    var diferencia = fechaFin-ahora;
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    return dias + ' días, ' + horas + ' horas, ' + minutos + ' minutos y ' + segundos + ' segundos';
}

function actualizarReloj() {
    //obtener el div que mostrara la hora
    var divReloj = document.getElementById('divReloj');

    var divVacaciones = document.getElementById('divVacaciones');
    var fechaFinClases = new Date('2024-06-27');

    // vamos a obtener la hora
    var ahora = new Date();
    //actualizar el div
    divReloj.textContent = formateaHora(ahora);

    divVacaciones.textContent = tiempoVacaciones(fechaFinClases);
}
// ponemos un intervalo que actualice el reloj cada 1000 milisegundos, cada segundo
setInterval(actualizarReloj, 1000);

actualizarReloj();


