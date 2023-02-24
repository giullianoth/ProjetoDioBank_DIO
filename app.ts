import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SpecialDioAccount } from "./class/SpecialDioAccount";

console.log("********");

const peopleAccount: PeopleAccount = new PeopleAccount(1234, "Giulliano", 12345678);
peopleAccount.deposit(400);
peopleAccount.withdraw(500);
peopleAccount.viewBalance();

console.log("********");

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 87654321);
companyAccount.deposit(50000);
companyAccount.getLoan(100000);
companyAccount.viewBalance();

console.log("********");

const specialAccount: SpecialDioAccount = new SpecialDioAccount("Tharso", 3456789);
specialAccount.deposit(400);
specialAccount.withdraw(120);
specialAccount.viewBalance();

console.log("********");
