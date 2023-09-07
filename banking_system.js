class BankAccount {
  constructor(owner, amount) {
    this.owner = owner;
    this.amount = amount;
  }

  balance() {
    alert(`${this.owner}'s Balance: ${this.amount}`);
  }

  _deposit(amount) {
    this.amount += amount;
    alert(`Deposited ${amount} to ${this.owner}'s account`);
    this.balance();
  }

  _withdraw(amount) {
    this.amount -= amount;
    alert(`Withdrawed ${amount} from ${this.owner}'s account`);
    this.balance();
  }
}

class Customer extends BankAccount {
  constructor(owner, amount) {
    super(owner, amount);
  }

  deposit() {
    let amount = prompt("Deposit amount", "");
    super._deposit(Number(amount));
  }

  withdraw() {
    let amount = prompt("Withdraw amount", "");
    super._withdraw(amount);
  }
}

const main = () => {
  const name = prompt("Input your name", "");
  let balance = prompt("Input your balance", "");
  let again = "n";
  const user = new Customer(name, Number(balance));
  user.balance();

  do {
    let method = prompt(
      `
        Choose a method: 
        1. Deposit
        2. Withdraw 
        `,
      ""
    );

    if (method === "1") {
      user.deposit();
    } else if (method === "2") {
      user.withdraw();
    }

    again = prompt("Do you want to repeat the transaction? (y/n)", "");
  } while (again === "y" || again === "Y");
};

main();

// Muhammad Luthfi Ramadhan
// BEJS - 1
