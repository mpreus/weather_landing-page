document.addEventListener("DOMContentLoaded", init);
function init() {
	console.log("Jestem!");

/* nawigacja */
	let aboutUs = document.querySelector("#aboutUs");
	aboutUs.addEventListener("click", function() {
		Swal.fire({
  			html: '<span style="color:#041f52; font-size:1.4rem;">Nowo powstała firma<br>z ambicjami dostarczenia szerokiej publiczności<br><b>precyzyjnej prognozy pogody</b></span>',
  			imageUrl: 'images/undraw_weather_d9t2.svg',
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
  			imageUrl: 'images/undraw_code_typing_7jnv.svg',
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
  			imageUrl: 'images/undraw_code_typing_7jnv.svg',
  			imageWidth: 400,
  			imageHeight: 300,
  			imageAlt: 'Custom image',
  			background: 'rgba(254, 182, 69, 1)',
  			confirmButtonColor: '#041f52',
  			animation: false
		});
	});

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