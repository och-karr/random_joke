//zadanie, które będzie miało na celu pobieranie losowego żartu o Chucku Norrisie

var url = 'http://api.icndb.com/jokes/random';//zmienna url, która zawiera pełny adres do naszego dowcipu

getJoke(); //zart na start
//znajdujemy odpowiedni przycisk na stronie i podpinamy nasłuchiwanie na kliknięcie tak,
//aby każdorazowo pobierał nam się losowy żart:
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
	getJoke();
});

//do zmiennej paragraph przypisujemy element DOM paragrafu, który odpowiada za wyświetlanie dowcipu:
var paragraph = document.getElementById('joke');

//implementacja funkcji getJoke():
function getJoke() {
	var xhr = new XMLHttpRequest();	//tworzymy nową instancję obiektu XMLHttpRequest
	xhr.open('GET', url);	//otwieramy połączenie z wybranym adresem
	xhr.addEventListener('load', function(){	//do połączenia podpinamy nasłuchiwanie na odpowiedź z serwera
		var response = JSON.parse(xhr.response);	//callback - zmienna response - 
		//dostajemy od serwera odpowiedź w formacie JSON i musimy ją "sparsować"" na obiekt JavaScriptowy.
		paragraph.innerHTML = response.value.joke; //adres z devtools: network-random-value-joke
	});
	xhr.send();
}

