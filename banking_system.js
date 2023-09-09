class BankAccount {
  constructor(owner, amount) {
    this.owner = owner;
    this.amount = amount;
  }

  balance() {
    alert(`${this.owner}'s Balance: ${this.amount}`);
  }

  _deposit(amount) {
    return new Promise((resolve, reject) => {
      this.amount += amount;
      setTimeout(() => {
        if (amount <= 0 || isNaN(amount)) {
          return reject("Invalid input! Please enter a correct input");
        }

        return resolve(alert(`Deposited ${amount} to ${this.owner}'s account`));
      }, 2000);
    });
  }

  _withdraw(amount) {
    return new Promise((resolve, reject) => {
      this.amount -= amount;
      setTimeout(() => {
        if (amount <= 0 || amount > this.amount || isNaN(amount)) {
          return reject("Invalid input! Please enter a correct input");
        } else if (this.amount <= 0) {
          return reject("Balance is 0");
        }
        return resolve(
          alert(`Withdrawed ${amount} from ${this.owner}'s account`)
        );
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
    try {
      await super._deposit(Number(amount));
      this.balance();
    } catch (error) {
      alert(error);
      return Promise.reject(error);
    }
  }

  async withdraw() {
    const amount = prompt("Withdraw amount", "");
    try {
      await super._withdraw(amount);
      this.balance();
    } catch (error) {
      alert(error);
      return Promise.reject(error);
    }
  }
}

const main = async () => {
  const name = prompt("Input your name", "");
  const balance = prompt("Input your balance", "");
  if (balance <= 0 || isNaN(Number(balance))) {
    alert("Invalid input! Please enter a correct input");
    return main();
  }
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
      return;
    }

    again = prompt("Do you want to repeat the transaction? (y/n)", "");
  } while (again === "y" || again === "Y");
};

main();

// Muhammad Luthfi Ramadhan
// BEJS - 1
