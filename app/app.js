document.addEventListener("DOMContentLoaded", init);
function init() {

/* 
wywołanie funkcji z efektami wizualnymi: 
buildingVisualEffectOnCanvas();
*/

/* nawigacja */
	let aboutUs = document.querySelector("#aboutUs");
	aboutUs.addEventListener("click", function() {
		Swal.fire({
  			html: '<span style="color:#041f52; font-size:1.4rem;">Nowo powstała firma<br>z ambicjami dostarczenia szerokiej publiczności<br><b>precyzyjnej prognozy pogody</b></span>',
  			imageUrl: 'images/weather_forecast.svg',
  			imageWidth: 400,
  			imageHeight: 300,
  			imageAlt: 'Custom image',
  			background: 'rgba(254, 182, 69, 1)',
  			confirmButtonColor: '#041f52',
  			animation: false
		});
	});
	let moreCities = document.querySelector("#moreCities");
	moreCities.addEventListener("click", function() {
		Swal.fire({
  			html: '<span style="color:#041f52; font-size:1.4rem;">Strona w trakcie budowy (masa pracy!).<br><b>Zajrzyj później</b></span>',
  			imageUrl: 'images/code_typing.svg',
  			imageWidth: 400,
  			imageHeight: 300,
  			imageAlt: 'Custom image',
  			background: 'rgba(254, 182, 69, 1)',
  			confirmButtonColor: '#041f52',
  			animation: false
		});
	});
	let contact = document.querySelector("#contact");
	contact.addEventListener("click", function() {
		Swal.fire({
  			html: '<span style="color:#041f52; font-size:1.4rem;">Skontaktuj się z nami przez e-mail:<a href="mailto:mpreus@onet.eu">Maciej Preus</a><br>albo zadzwoń by pogadać: +48 000 000 000</span>',
  			imageUrl: 'images/message.svg',
  			imageWidth: 400,
  			imageHeight: 300,
  			imageAlt: 'Custom image',
  			background: 'rgba(254, 182, 69, 1)',
  			confirmButtonColor: '#041f52',
  			animation: false
		});
	});

/* efekty wizualne na dynamicznie wstawianym tytule strony */
	function buildingVisualEffectOnCanvas() {
		let particles = []; // tablica na cząsteczki 
		let frequency = 80; // tempo zmian w animacji, użyte w setInterval()
		/* definiowanie obiektu 'canvas' - wraz z funkcją createCanvas() - tu: na całą dostępną szerokość i wysokość okna */
		let c1 = createCanvas({width: window.innerWidth / 2, height: window.innerHeight / 4 });
		let c2 = createCanvas({width: window.innerWidth / 2, height: window.innerHeight / 4 });
		let c3 = createCanvas({width: window.innerWidth / 2, height: window.innerHeight / 4 });
		
		let tela = c1.canvas;
		let canvas = c1.context;
		/* wstawiamy canvas do 'div': */
		document.getElementById("bodyElem").append(c3.canvas);
		/* tekst do wypełnienia bąbelkami (w dwóch liniach) */
		writeText(c2.canvas, c2.context, "TWOJA\nPROGNOZA POGODY");

		setInterval(function() {
    			populate();
  			}.bind(this), frequency
		);

		function createCanvas(properties) {
	  		let canvas = document.createElement('canvas');
	    /* rozmiary obszaru canvas: */
	  		canvas.width = properties.width;
	  		canvas.height = properties.height;
	  	/* określenie kontekstu (efekty w canvas mogą być dwu- lub trójwymiarowe) */
	  		let context = canvas.getContext("2d");
	  		return {
	    		canvas: canvas,
	    		context: context
	  		}
		}
		/* definiowanie tekstu do wypełnienia bąbelkami wraz ze stylami: */
		function writeText(canvas, context, text) {
	  		let size = 60;
	  		context.font = size + "px Jaldi";
	  		context.fillStyle = "#000";
	  		context.textAlign = "center";
	  		let lineheight = 60;
	  		let lines = text.split('\n');
	  		for (let i = 0; i < lines.length; i++) {
	  		    context.fillText(lines[i], canvas.width / 2, canvas.height / 2 + lineheight * i - (lineheight * (lines.length - 1)) / 3);
	  		}
		}
		/* klasa definiująca bąbelki - efekt wpłynięcia koloru */
	




	}
/* koniec funkcji z efektami wizualnymi */



/* prognoza na noc */
	let pictureDiv = document.querySelector(".pictureDiv");
	let dayForecast = document.querySelector(".dayForecast");
	let nightForecast = document.querySelector(".nightForecast");
	let contentDiv = document.querySelector(".contentDiv");

	pictureDiv.addEventListener("mouseover", function() {
		
		dayForecast.style.display = "none";
		nightForecast.style.display = "block";
		
		contentDiv.style.backgroundColor = "#041f52";
		contentDiv.style.color = "#fff";
	});

	pictureDiv.addEventListener("mouseleave", function() {
		
		nightForecast.style.display = "none";
		dayForecast.style.display = "block";
		
		contentDiv.style.backgroundColor = "rgba(255, 255, 255, 0)";
		contentDiv.style.color = "#000";
	});

/* schowanie prognozy szczegółowej */
	let hourlyButton = document.getElementById("hourlyForecast");
	let hourlyForecast = document.querySelector(".additionalInfo");
	
	hourlyButton.addEventListener("click", function() {
		
		hourlyForecast.classList.toggle("visible");
	});

/* accordion dla prognozy godzinowej */
	let hoursDisp = document.querySelectorAll("h4");
	
	for (let i = 0; i < hoursDisp.length; i++) {
		
		hoursDisp[i].addEventListener("click", function() {
			this.classList.toggle("active");
			
			let forecastPanel = this.nextElementSibling;
			
			if (forecastPanel.style.display === "block") {
				forecastPanel.style.display = "none";
			}
			else {
				forecastPanel.style.display = "block";
			}
		});
	}

}