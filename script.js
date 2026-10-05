// data hidden and (Let's combine constructor function + closure.)

function bankAccount(name, insitialBalance) {
  let balance = insitialBalance;

  this.name = name;

  this.deposit = function (amount) {
    balance += amount;
  };

  this.withdraw = function (amount) {
    if (amount <= balance) {
      balance -= amount;
    } else {
      ("insifeinct balance");
    }
  };

  this.getbalance = function () {
    return balance;
  };
}

const account = new bankAccount("madhavi", 1000);

account.deposit(500);

console.log(account.getbalance());
