// great indepth es6 explanation of classes: http://exploringjs.com/es6/ch_classes.html#sec_essentials-classes

// Classes defined like this:
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
/*
========================================
# Questions and Answers
========================================
## Q: What typeof is a class declaration?
A: `function`
----------------------------------------
## Q: Are classes hoisted?
A: Nope.
----------------------------------------
## Q: Can you invoke a class via `new`?
A: Yes
----------------------------------------
## Q: Can you invoke a class with a function call?
A: No.

console.log(Point()) 
> TypeError: Class constructor Point cannot be invoked without 'new'

## Q. How many ways are thewre to define class?
A: two.  Just as with functions, there are 2 ways to define classes.
  1. class declarations
  2. class expressions 

Declarations:  doesn't use a variable (active)
Expressions: uses a variable (passive)
----------------------------------------
/*
*/


/* eslint-disable no-undef */ // Remove this comment once you write your classes.
class User  {
  options() {
    return User.options;
  };

  get options.email() {
    return.options.email;
  }
  static comparePasswords(potentialPassword) {
    return potentialPassword === this.options.password;
  }
}




  constructor(options, email, password) {
// `options` will be an object that will have the properties `email` and `password`.
      this.email = this.options.email;
      this.password = options.password;
  }
}
// Set the `email` and `password` properties on the class.
// Add a method called `comparePasswords`.  `comparePasswords` should have a parameter
// for a potential password that will be compared to the `password` property.
// Return true if the potential password matches the `password` property.  Otherwise return false.

const me = new User();
me.email = 'cg@gmail.com';
me.password = '12345';

console.log(Use.options);
console.log(me.comparePasswords);

/* eslint-disable no-undef */ // Remove this comment once you write your classes.

// Create a class called `Animal` and a class called `Cat`.
// `Cat` should extend the `Animal` class.
// Animal and Cat should both have a parameter called `options` in their constructors.
// Animal should have the property `age` that's set in the constructor and the method
// `growOlder` that returns the age.
// Cat should have the property `name` that is set in the constructor and the method
// `meow` that should return the string `<name> meowed!` where `<name>` is the `name`
// property set on the Cat instance.

