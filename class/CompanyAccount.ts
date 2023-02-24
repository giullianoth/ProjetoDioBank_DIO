import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (value: number): void => {
        if (this.validateStatus()) {
            this.setBalance(this.getBalance() + value);
            console.log(`[Empréstimo] Foi aprovado o empréstimo no valor de $${value} para a empresa ${this.getName()}.`);
        }
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.setBalance(this.getBalance() + value);
            console.log(`[Depósito] A empresa ${this.getName()} depositou a quantia de $${value}.`);
        }        
    }
}