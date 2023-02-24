import { DioAccount } from "./DioAccount";

export class SpecialDioAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.setBalance(this.getBalance() + value + 10);
            console.log(`[Depósito] ${this.getName()}, você depositou $${value} e ganhou um bônus de $10, totalizando $${value + 10}.`);
        }
    }
}