var check = 0;
var seconden = 0;

function printMsg() {
	document.getElementById("op").innerHTML = "5 seconden zijn voorbij"; //zal bericht naar HTML sturen als er 5 seconden verbij zullen zijn
}
function start() {
	check = window.setTimeout(printMsg, 5000); //als er 5000ms voorbij zijn zal de functie prinstMsg opgeroepen worden
}

function stop() {
	window.clearTimeout(check); //cleartimeout zal de functie check resetten
}

function printtimer() {
	document.getElementById("ok").innerHTML = seconden + " Seconden"; // zal een boodschap naar html versturen
	seconden++;
}
function telaf() {
	check = window.setInterval(printtimer, 1000); //printimer zal elke 1000ms opnieuw opgroepen worden hierbij zal de variable seconden met 1 verhoogd worden
}

function pauze() {
	window.clearInterval(check); //met deze fucntie pauzeert hij de variabe "check" en daarmee dus de timer
}
