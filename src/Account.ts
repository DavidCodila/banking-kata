export class Account {
  public balance = 0;
  private date = "0/0/0000";
  construstor() {}
  deposit(amountToDeposit: number): void {
    this.balance += amountToDeposit;
  }
  withdraw(amountToWithdraw: number): void {
    this.balance -= amountToWithdraw;
  }
  printStatement(): String {
    return "";
  }
}
