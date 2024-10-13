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

const array = [12, 10, 22, 5, 25];
for(let i = 0; i < array.length; i++){
  setTimeout(function(){
    console.log("The element in position " + i + " is: " + array[i]);
  }, 5000);
}