- In arrow function the this keyword will point to where the function is present.

-The __proto__ is an object within every object that points out (references) the prototype that has been set for that object.__proto__ is the actual object that is used in the lookup chain to resolve methods, etc. 

- The prototype property is only present for functions and is a property that's set only if you're using the 'new' keyword when creating objects with this (constructor) function.

- classes in js can be declared as both class expression or class declaration
- Classes are not hoisted //we can't use them before declaring them
- Class are first-class citizens
- The body of a class always executed in strict mode
