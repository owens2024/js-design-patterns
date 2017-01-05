// Adapter Pattern

class Person {
  constructor (name) {
    this.name = name || 'John Doe';
  }
  hello () {
    return `Hello, my name is ${ this.name }`;
  }
}

class Werewolf {
	constructor (person) {
  	this.person = person || new Person();
  }
  greetAtNight () {
  	return `Grr ... I don't know any ${this.person.name}`
  }
}

const george = new Person('George');

const msg = george.hello();

console.log(msg);

const atNight = new Werewolf(george);

console.log(atNight.greetAtNight());
