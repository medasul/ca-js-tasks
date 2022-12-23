console.groupCollapsed('----classes-tasks-3 ----');
{

console.group('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  //Step 1: Build a class Challenge
  //Step 2: Build a method for class Challenge

  class Challenge {
    id;
    level;

    constructor(id, level) {
      this.id = id;
      this.level = level;
    }

    get points() {
      let pointsList = {
        "VE": 5,
        "EA": 10,
        "ME": 20,
        "HA": 40,
        "VH": 80,
        "EX": 120,
      }
      return pointsList[this.level];
    }
  }

  //Step 3: Build a class User
  //Step 4: Build a method for the class User
  class User {
    constructor(name, xp, log) {
      this.name = name
      this.xp = xp
      this.log = log
    }

    set newSolvedChallenge(challenge) {
      this.xp += challenge.points;
      this.log.push(challenge.id);
    }
  }

  //Step 5: Declare the instances needed for the tests
  const user1 = new User('Madam', 0, []);
  const user2 = new User('Steve', 0, []);

  const challenge1 = new Challenge(1, 'VE');
  const challenge2 = new Challenge(2, 'EA');
  const challenge3 = new Challenge(3, 'ME');
  const challenge4 = new Challenge(4, 'HA');
  const challenge5 = new Challenge(5, 'VH');
  const challenge6 = new Challenge(6, 'EX');

  //Madam user1
  user1.newSolvedChallenge = challenge1;
  user1.newSolvedChallenge = challenge4;
  user1.newSolvedChallenge = challenge6;

  ///Steve user2
  user2.newSolvedChallenge = challenge5;
  user2.newSolvedChallenge = challenge3;
  user2.newSolvedChallenge = challenge2;

  // Step 6: The testing mechanics
  console.log(user1.name) //atsakymas ➞ "Madam"
  console.log(user2.xp) //atsakymas ➞ 110
  console.log(user1.log) //atsakymas ➞ [1, 4, 6]

  console.log(challenge4.level) //atsakymas ➞ "HA"
  console.log(challenge3.id) //atsakymas ➞ 3
  console.log(challenge1.points) //atsakymas ➞ 5

}
console.groupEnd();

console.group('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  class Player {
    #hp;
    #en;
    #maxHp;
    #maxEn;
    constructor({ name, health, energy, armor }) {

      this.#hp = health,
        this.#en = energy,
        this.#maxHp = health,
        this.#maxEn = energy;
      this.name = name;
      this.armor = armor;
    }

    get hp() {
      return this.#hp;
    }
    set hp(newHealth) {
      if (newHealth < 0) { this.#hp = 0; }
      else if (newHealth >= this.#maxHp) {
        this.#hp = this.#maxHp
      }
      else { this.#hp = newHealth }
    }

    get en() {
      return this.#en;
    }
    set en(newEnergy) {
      if (newEnergy < 0) { this.#en = 0; }
      else if (newEnergy >= this.#maxEn) {
        this.#en = this.#maxEn
      }
      else { this.#en = newEnergy }
    }

    get hpPerc() {
      return Number((this.#hp * 100 / this.#maxHp).toFixed(2));
    }

    //butent sis metodas darytas pasitelkiant atsakymus, nes sunkumu kilo parasant veikimo principa, vis kazkas neveike
    learnSkill(name, stats) {
      this[name] = (enemy) => {
        if (this.#en < stats.cost) {
          return `${this.name} attempted to use ${name}, but didn't have enough energy!`
        }

        this.#en -= stats.cost;

        let actualArmor = enemy.armor - stats.penetration;
        if (actualArmor < 0) {
          actualArmor = 0;
        }

        let damagedone = stats.damage * ((100 - actualArmor) / 100);

        let resultString = `${this.name} used ${name}, ${stats.desc}, against ${enemy.name}, doing ${damagedone.toFixed(2)} damage!`;

        if (stats.heal) {
          resultString += ` ${this.name} healed for ${stats.heal} health!`;
          this.hp = this.hp + stats.heal;
        }

        enemy.hp = (enemy.hp - damagedone).toFixed(2);
        if (enemy.hp <= 0) {
          resultString += ` ${enemy.name} died. `
        } else {
          resultString += ` ${enemy.name} is at ${enemy.hpPerc}% health.`
        }

        return resultString;
      }
    }
  }


  const alice = new Player({
    name: "Alice",
    health: 110,
    energy: 50,
    armor: 10,
  })
  const bob = new Player({
    name: "Bob",
    health: 100,
    energy: 60,
    armor: 20,
  })

  alice.learnSkill("fireball", {
    damage: 23,
    penetration: 1.2,
    heal: 5,
    cost: 15,
    desc: "a firey magical attack"
  })

  console.log(alice.fireball(bob))
  // Alice used fireball, a firey magical attack, against Bob, doing
  // 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

  bob.learnSkill("superbeam", {
    damage: 200,
    penetration: 50,
    heal: 50,
    cost: 75,
    desc: "an overpowered attack, pls nerf"
  })

  console.log(bob.superbeam(alice))
  // Bob attempted to use superbeam, but didn't have enough energy!

}
console.groupEnd();
}
console.groupEnd();