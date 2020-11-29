class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  callMyProfile() {
    console.log(this.name, this.age);
  }
}

const Naoto = new Human("Naoto", 22);
console.log(Naoto);
Naoto.callMyProfile();

const Nakata = new Human("Nakata", 36);
console.log(Nakata);
Nakata.callMyProfile();
