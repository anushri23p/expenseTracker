class Expense {
  #dollars;
  #cents;

  constructor(dollars, cents) {
    this.#dollars = dollars;
    this.#cents = cents;
  }

  add(other) {
    const totalCents = this.#cents + other.#cents;
    const totalDollars =
      this.#dollars + other.#dollars + Math.floor(totalCents / 100);

    return new Expense(totalDollars, totalCents % 100);
  }

  toString() {
    return `${this.#dollars}.${this.#cents.toString().padEnd(2, 0)}`;
  }

  static parseExpense(expense) {
    const [dollars, cents] = expense.toFixed(2).split(".");

    return new Expense(parseInt(dollars), parseInt(cents));
  }

  // isEqualTo(other) {
  //   if (!(other instanceof Expense)) return false;

  //   return this.#dollars === other.#dollars && this.#cents === other.#dollars;
  // }
}

const main = () => {
  const e1 = Expense.parseExpense(12.304);
  const e2 = Expense.parseExpense(2.77);
  return e1.add(e2).toString();
};

console.log(main());
