document.addEventListener("DOMContentLoaded", init);
function init() {
	console.log("Jestem!");

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