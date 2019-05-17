$.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {

	$('#load').click(function(){

	var dataPerson =$('<div id="dane-programisty"><h2>' + data.imie + ' ' + data.nazwisko + ' Zawód: '+ data.zawod + ' Firma: ' + data.firma +  '</h2></div>');
 	$('body').append(dataPerson);
	});
	
	}
);
