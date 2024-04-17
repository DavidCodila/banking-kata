import { expect, test } from "bun:test";
import { Account } from "../src/Account";

test("Test deposit method", () => {
  const account = new Account();
  account.deposit(500);
  expect(account.balance).toEqual(500);
});
