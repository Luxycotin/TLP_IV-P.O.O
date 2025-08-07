function cuentaBancaria(titular, saldoInicaial) {

    this.titular = titular; 
    this.saldo = saldoInicaial;
}

cuentaBancaria.prototype.depositar = function(monto) {

    this.saldo = this.saldo + monto;

}

cuentaBancaria.prototype.extraer = function(monto){
    if  (monto <= this.saldo) {
        this.saldo = this.saldo - monto
    } else {
        console.log("Fondo Insuficientes")
    }
}
cuentaBancaria.prototype.consultarSaldo = function(monto) {
    return this.saldo
}

const newTitular = new cuentaBancaria("Juan Soto", 500);

console.log(newTitular.consultarSaldo());

newTitular.depositar(200);

console.log(newTitular.consultarSaldo());

newTitular.extraer(777);

console.log(newTitular.consultarSaldo());