document.addEventListener("DOMContentLoaded", init);
function init() {
	console.log("Jestem!");
/* schowanie prognozy szczegółowej */

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