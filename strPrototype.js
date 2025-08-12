String.prototype.concatenarPalabra = function(palabra) {

    return `${this} ${palabra}`

}

const holi = "Hola cara de bola"
const holi2 = holi.concatenarPalabra("mandioca")

console.log(holi2)

