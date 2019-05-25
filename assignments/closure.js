// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const government = () =>{
  var taxMoney=100000000000;
  console.log(`we have this much spending power ${taxMoney}`);

  const departmentStores = () =>{
    var taxCharged=$5;
    console.log(`we only charge ${taxCharged} per big transaction`)

    const person = () =>{
      var moneyEarned=4000;
      console.log(`I only make ${moneyEarned} this month. Stores charge me ${taxCharged} everytime I buy that is why there is this much ${taxMoney}`)
    }
  }
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  var counter=0;
 return ()=>{
    return ++counter;
  }
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (num) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  var indecrement={
  increment: counter =>{return ++counter;},
  decrement: counter =>{return --counter;}
}
console.log(indecrement.decrement(num));
};

counterFactory(50);
