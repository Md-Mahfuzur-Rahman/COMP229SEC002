// main.js 
// created by Mahfuz 

//******** importing 2 methods only from Lib.js file ********
import {halfOf, multiply} from './lib.js';

// calling methods of Lib.js files. 
// using Console Log to show the method output in Console section of Browser 
console.log(halfOf(100000));
console.log(multiply(3000, 2));


// importing everything from doSomething.js file 
import doSomething from "./doSomething.js";
doSomething(); 


import { flag, touch } from '/validator.js';
console.log(flag);
touch();
console.log(flag);








