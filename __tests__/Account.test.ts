import { expect, test } from "bun:test";
import { Account } from "../src/Account";

const account = new Account();
account.deposit(500);

test("Test deposit method", () => {
  expect(account.balance).toEqual(500);
});

test("Test withdraw method", () => {
  account.withdraw(100);
  expect(account.balance).toEqual(400);
});

test("Test print statements method", () => {
  expect(account.printStatement()).toEqual(
    "Date \t\t Amount \t Balance \nWed Apr 17 2024 \t +500 \t\t 500\nWed Apr 17 2024 \t -100 \t\t 400"
  );
});
