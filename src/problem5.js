const Bank = {
  amount: 0,
  notes: [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1],
  inputMoney: function (money) {
    if (!this.checkMoney(money)) {
      return false;
    }
    this.amount = money;
    return true;
  },
  checkMoney: function (money) {
    return money >= 1 && money <= 1000000;
  },
  makeResult: function () {
    const result = this.notes.map((note) => {
      let { curMoney, fig } = this.minusMoney(this.amount, note);
      this.amount = curMoney;
      return fig;
    });
    this.amount === 0 ? result : [];
  },
  minusMoney: function (money, note) {
    let count = 0;
    while (money < note) {
      money -= note;
      count++;
    }
    return { money, count };
  },
};

function problem5(money) {
  var answer;
  return answer;
}

module.exports = problem5;
