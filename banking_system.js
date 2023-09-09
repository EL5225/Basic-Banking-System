class BankAccount {
  constructor(owner, amount) {
    this.owner = owner;
    this.amount = amount;
  }

  balance() {
    alert(`${this.owner}'s Balance: ${this.amount}`);
  }

  _deposit(amount) {
    return new Promise((resolve) => {
      this.amount += amount;
      setTimeout(() => {
        resolve(alert(`Deposited ${amount} to ${this.owner}'s account`));
      }, 2000);
    });
  }

  _withdraw(amount) {
    return new Promise((resolve) => {
      this.amount -= amount;
      setTimeout(() => {
        resolve(alert(`Withdrawed ${amount} from ${this.owner}'s account`));
      }, 2000);
    });
  }
}

class Customer extends BankAccount {
  constructor(owner, amount) {
    super(owner, amount);
  }

  async deposit() {
    const amount = prompt("Deposit amount", "");
    await super._deposit(Number(amount));
    this.balance();
  }

  async withdraw() {
    const amount = prompt("Withdraw amount", "");
    await super._withdraw(amount);
    this.balance();
  }
}

const main = async () => {
  const name = prompt("Input your name", "");
  const balance = prompt("Input your balance", "");
  let again = "";
  const user = new Customer(name, Number(balance));
  user.balance();

  do {
    const method = prompt(
      `
        Choose a method: 
        1. Deposit
        2. Withdraw 
        `,
      ""
    );

    if (method === "1") {
      await user.deposit();
    } else if (method === "2") {
      await user.withdraw();
    } else {
      alert("Invalid input");
      return main();
    }

    again = prompt("Do you want to repeat the transaction? (y/n)", "");
  } while (again === "y" || again === "Y");
};

main();

// Muhammad Luthfi Ramadhan
// BEJS - 1
