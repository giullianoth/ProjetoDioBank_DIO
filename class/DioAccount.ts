export abstract class DioAccount {
  protected name: string
  protected readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
    console.log(`Conta da DioBank nº ${this.accountNumber} aberta para ${this.name}.`)
  }

  setName = (name: string): void => {
    this.name = name
    console.log("Nome alterado com sucesso!")
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
      console.log(`Depósito: Você depositou o valor de $${value}`)
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (value <= this.balance) {
        this.balance -= value
        console.log(`Saque: Você sacou o valor de $${value}`)
      } else {
        console.log("Saque: Saldo insuficiente")
      }
    }
  }

  getBalance = (): void => {
    console.log(`Saldo: Seu saldo é de $${this.balance}`)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error("Conta inválida")
  }
}
