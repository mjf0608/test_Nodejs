//const fibonacci = require('./lib/fibonacci');

//var len = 20;

//for(var i=1;i<=len;i++){
//console.log(fibonacci(i));
//}

//for(;len--;){
//console.log(fibonacci(len));
//}

//function isLeapYear(n){
//  if(n%400 == 0){
// return true;
//}
//  if(n%100 == 0 ){
//  return false;
//} 
// if(n%4 == 0){
//  return true;
//}
//return false;
//}

//console.log("2000:"+isLeapYear(2000));

//console.log("1900:"+isLeapYear(1900));

//console.log("2008:"+isLeapYear(2008));



const anagram = require('./lib/anagram');

console.log("abcd:"+anagram("abcd"));