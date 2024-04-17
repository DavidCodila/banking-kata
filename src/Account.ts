export class Account {
  public balance: number;
  construstor() {
    this.balance = 0;
  }
  deposit(amountToDeposit: number): void {}
  withdraw(amountToWithdraw: number): void {}
  printStatement(): String {
    return "";
  }
}
