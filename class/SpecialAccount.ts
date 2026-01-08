import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            const bonus: number = 10
            this.balance += (value + bonus)
            console.log(`Depósito: Você depositou o valor de $${value}, com o bônus de $${bonus}`)
        }
    }
}