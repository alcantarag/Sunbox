function startTime(){
	today=new Date();
	h=today.getHours();
	m=today.getMinutes(); 
	s=today.getSeconds();
	
	m=checkTime(m);
	s=checkTime(s);
	var anio=today.getYear();
	if (anio < 1000)
	anio+=1900;
	var dia=today.getDay();
	var mes=today.getMonth()+1;
	var mesTexto= "";
	var dia=today.getDate();
	if (dia<10)
	dia="0"+dia; 
	switch(mes){
	case 1:
		mesTexto = "Enero";
		break;
	case 2:
		mesTexto = "Febrero";
		break;
	case 3:
		mesTexto = "Marzo";
		break;
	case 4:
		mesTexto = "Abril";
		break;
	case 5:
		mesTexto = "Mayo";
		break;
	case 6:
		mesTexto = "Junio";
		break;
	case 7:
		mesTexto = "Julio";
		break;
	case 8:
		mesTexto = "Agosto";
		break;
	case 9:
		mesTexto = "Septiembre";
		break;
	case 10:
		mesTexto = "Octubre";
		break;
	case 11:
		mesTexto = "Noviembre";
		break;
	case 12:
		mesTexto = "Diciembre";
		break;
	}
	
	if (h >= 12){
		h = h-12;
		
		if (h == 0)
			h = 12;
		document.getElementById('reloj').innerHTML="Hora:  "+h+":"+m+":"+s +" PM";
	}else{
		document.getElementById('reloj').innerHTML="Hora:  "+h+":"+m+":"+s+" AM";
	}
	
	document.getElementById('fecha').innerHTML="Fecha:  "+dia+" "+ mesTexto +" "+anio;
	t=setTimeout('startTime()',500);
}
function checkTime(i)
{if (i<10) {i="0" + i;}return i;}
window.onload=function(){startTime();}
