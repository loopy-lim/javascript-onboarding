const SnsFreindrRecomander = {
  user: "",
  friends: [],
  visitors: [],
  relations: {},
  scores: {},
  inputDatas: function (user, friends, visitors) {
    if (this.checkDatas(user, friends, visitors)) {
      return false;
    }
    this.user = user;
    this.friends = friends;
    this.visitors = visitors;
    return true;
  },
  checkDatas: function (user, friends, visitors) {
    return (
      this.checkUserLength(user) &&
      this.checkFriendsLength(friends) &&
      this.checkVisitersLength(visitors) &&
      this.checkEnglish(user, ...friends, ...visitors)
    );
  },
  checkUserLength: function (user) {
    return user >= 1 && user <= 30;
  },
  checkFriendsLength: function (friends) {
    return friends.length >= 1 && friends.length <= 10000;
  },
  checkVisitersLength: function (visitors) {
    return visitors.length >= 0 && visitors.length <= 10000;
  },
  checkEnglish: function (...words) {
    return words.every((word) => /^[A-Za-z0-9]*$/.test(word));
  },
  makeRelations: function () {
    this.friends.forEach((friend) => {
      this.addRelation(friend[0], friend[1]);
      this.addRelation(friend[1], friend[0]);
    });
  },
  addRelation: function (one, two) {
    if (!(one in this.relations)) {
      this.relations[one] = [];
      this.scores[one] = 0;
    }
    this.relations[one].push(two);
  },
  calculateScore: function () {
    for (const score in this.scores) {
      this.relations[score].forEach((other) => {
        if (this.relations[other].find(user)) {
          this.scores[score] += 10;
        }
      });
    }
  },
};

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
