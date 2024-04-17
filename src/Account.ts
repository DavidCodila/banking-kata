export class Account {
  public balance = 0;
  construstor() {}
  deposit(amountToDeposit: number): void {
    this.balance += amountToDeposit;
  }
  withdraw(amountToWithdraw: number): void {}
  printStatement(): String {
    return "";
  }
}
