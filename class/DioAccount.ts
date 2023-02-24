export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
        console.log(`Olá, ${this.name}! Você abriu sua conta de número ${this.accountNumber} na DioBank. Seu saldo é de $${this.balance}. Comece a fazer suas transações hoje mesmo!`)
    }

    getName = (): string => {
        return this.name;
    }

    getBalance = (): number => {
        return this.balance;
    }

    setBalance = (balance: number): void => {
        this.balance = balance;
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.balance += value;
            console.log(`[Depósito] ${this.name}, você depositou $${value}.`);
        }
    }

    withdraw = (value: number): void => {
        if (this.validateStatus()) {
            if (this.balance >= value) {
                this.balance -= value;
                console.log(`[Saque] ${this.name}, você sacou $${value}.`);
            } else {
                console.log("[Saque] Saldo insuficiente.");                
            }
        }
    }

    viewBalance = (): void => {
        if (this.validateStatus()) {
            console.log(`[Consulta de saldo] ${this.name}, seu saldo é de $${this.balance}.`);
        }
    }

    protected validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }

        throw new Error("Esta conta é inválida.");
    }
}