import { Guest } from './Guest';
import { Puppy } from './puppy';

function add(a: number, b: number) {
  return a + b;
}

console.log(add(2, 2));

const numbers = [12, 23, 62, 34, 19, 40, 4, 9];

console.log(
  numbers.filter(function(n: number) {
    return n > 30;
  })
);

//  Or use shorthand function notation.
//  (Also called arrow function)
console.log(numbers.filter(n => n > 30));

var hotdog = new Puppy('Édouard');
console.log(hotdog.bark());
//  Let's create more puppies
var oscar = new Puppy('Oscar-Claude');
console.log(oscar.bark());

export class Codelab {
  constructor(public guests: Guest[]) {}

  getGuestsComing() {
    return this.guests.filter(guest => guest.coming);
  }
}
