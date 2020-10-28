import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// index.js

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.rg = 123456780;

const contaCorrenteRicardo = new ContaCorrente();
// contaCorrenteRicardo.#saldo = 0;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

const contaCorrenteAlice = new ContaCorrente();
// contaCorrenteAlice.#saldo = 0;
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.cliente = cliente2;

contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.sacar(200);



console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);