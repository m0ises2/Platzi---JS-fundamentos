class Toggable {
	constructor(elem) {
		this.elem = elem
		this.elem.innerHTML = 'Off'
		this.activated = false
		this.elem.addEventListener('click', this.onClick.bind(this))
	}

	onClick(oEvent) {
		// Cambiar estado interno:
		this.activated = !this.activated
		console.log(this)
		// llamar a toggleText:
		this.toggleText()
	}

	toggleText() {
		// Cambiar el texto: 
		this.elem.innerHTML = this.activated ? 'On' : 'Off'
	}
}

const button = document.getElementById('boton')
const miBoton = new Toggable(button)
