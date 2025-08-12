String.prototype.concatenarPalabra = function(palabra) {

    return `${this} ${palabra}`

}

const holi = "Hola"
const holi2 = holi.concatenarPalabra("mandioca")

console.log(holi2)

