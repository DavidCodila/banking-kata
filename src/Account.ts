export class Account {
  public balance = 0;
  private date!: string;
  private events = ["Date \t\t\t Amount \t Balance "];
  construstor() {}
  deposit(amountToDeposit: number): void {
    this.balance += amountToDeposit;
    this.date = String(new Date()).split(" ", 4).join(" ");
    this.events.push(
      this.date + " \t " + "+" + amountToDeposit + " \t\t " + this.balance
    );
  }
  withdraw(amountToWithdraw: number): void {
    this.balance -= amountToWithdraw;
    this.events.push(
      this.date + " \t " + "-" + amountToWithdraw + " \t\t " + this.balance
    );
  }
  printStatement(): String {
    const statement = this.events.join("\n");
    console.log(statement);
    return String(statement);
  }
}
