// Java de la portada

// Galeria Carousel 
	function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};
/* Funcion que logra realizar el evento */
App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
	const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}
/*Izquierda */
let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}
/* derecha */
let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
// Java del Inicio de Sesion
	const form = document.querySelector("form");
	eField = form.querySelector(".email"),
	eInput = eField.querySelector("input"),
	pField = form.querySelector(".password"),
	pInput = pField.querySelector("input");
	form.onsubmit = (e)=>{
	e.preventDefault(); 
	(eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
	(pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
	setTimeout(()=>{ 
		eField.classList.remove("shake");
		pField.classList.remove("shake");
	}, 500);
	eInput.onkeyup = ()=>{checkEmail();}
	pInput.onkeyup = ()=>{checkPass();} 
	function checkEmail(){ 
		let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
		if(!eInput.value.match(pattern)){ 
		eField.classList.add("error");
		eField.classList.remove("valid");
		let errorTxt = eField.querySelector(".error-txt");
		(eInput.value != "") ? errorTxt.innerText = "Introduzca una direccion de correo valida " : errorTxt.innerText = "Correo no puede estar en blanco";
		}else{ 
		eField.classList.remove("error");
		eField.classList.add("valid");
		}
	}
	function checkPass(){ 
		let contra= /^.{4,10}$/;
		if(pInput.value.match(contra)){ 
		pField.classList.add("error");
		pField.classList.remove("valid");
		}else{ 
		pField.classList.remove("error");
		pField.classList.add("valid");
		}
	}
	
	if(!eField.classList.contains("error") && !pField.classList.contains("error")){
		window.location.href = form.getAttribute("action"); 
	}
	}

