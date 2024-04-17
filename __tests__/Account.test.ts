import { expect, test } from "bun:test";
import { Account } from "../src/Account";

const account = new Account();

test("Test deposit method", () => {
  account.deposit(500);
  expect(account.balance).toEqual(500);
});

test("Test withdraw method", () => {
  account.withdraw(100);
  expect(account.balance).toEqual(400);
});
