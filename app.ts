import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { SpecialAccount } from "./class/SpecialAccount"

// People Account
const peopleAccount: PeopleAccount = new PeopleAccount(12345, "Giulliano", 1111)
peopleAccount.deposit(50)
peopleAccount.withdraw(36)
peopleAccount.getBalance()
console.log(peopleAccount)

console.log("******************************************************************")

// Company Account
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 2222)
companyAccount.deposit(800)
companyAccount.getLoan(10000)
companyAccount.getBalance()
console.log(companyAccount)

console.log("******************************************************************")

// Special Account
const specialAccount: SpecialAccount = new SpecialAccount("Tharso", 3333)
specialAccount.deposit(150)
peopleAccount.withdraw(200)
specialAccount.getBalance()
console.log(specialAccount)