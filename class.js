class cuentaBancaria {
    
    #saldo = 0;

    constructor(titular, saldoInicial){

        this.titular = titular;
        this.#saldo = saldoInicial;
    }


    get saldo() {
        return this.#saldo;
    };

    set saldo(monto) {
        if (monto >= 0) {
            this.#saldo = monto;
        } else {
            console.log("El saldo no puede ser negativo, se espera ser un número real positivo :)");
        }
    };



    // set saldo(monto){

        
    // }
    depositar (monto) {
        if (monto > 0) {
            this.#saldo += monto;
        } else {
            console.log("El monto que se quiera depositar tiene que ser ser positivo");
        }
    }

    extraer (monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
        } else {
            console.log("El monto a extraer debe ser un número real y aparte tiene que ser menor o igual al saldo");
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const newTitular = new cuentaBancaria("Juan Q", 1000);

newTitular.depositar(777);
console.log(newTitular.consultarSaldo());
newTitular.extraer(500);
console.log(newTitular.consultarSaldo());
newTitular.extraer(2000); 
console.log(newTitular.consultarSaldo());