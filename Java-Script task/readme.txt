The code that provided to me is incorrect one it doesn't give the favourable output.

// const array = [12, 10, 22, 5, 25];
// for(var i = 0; i < array.length; i++){
// setTimeout(function(){
// console.log("The element in position " + i + " is: " + array[i]);
// }, 5000);
// }

// output of this is undefined 
//The element in position 5 is: undefined
// The element in position 5 is: undefined
// The element in position 5 is: undefined
// The element in position 5 is: undefined
// The element in position 5 is: undefined

But i make changes in the code to make it correct to fix this the changes are made is below.

To fix this issue, i have use let instead of var for i, because let has block scope and preserves the value of i for each iteration:

My new code is here 

const array = [12, 10, 22, 5, 25];
for(let i = 0; i < array.length; i++){
  setTimeout(function(){
    console.log("The element in position " + i + " is: " + array[i]);
  }, 5000);
}

It give the output as 

The element in position 0 is: 12
The element in position 1 is: 10
The element in position 2 is: 22
The element in position 3 is: 5
The element in position 4 is: 25


To Run this use compiler such as Vs code or Online compiler 

Link of online compiler: https://www.programiz.com/javascript/online-compiler/

Step-1: Copy and paste the correct code inside the compiler 
Step-2: Run the compiler 

Here you go !!!!!!!!
