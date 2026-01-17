// 1. Variable - 
// 1. Declaration basis - 1. Declaration        2. Assignment
// 1. var -
// var num1 = 54;
// console.log(num1);

// var num1 = 42;
// console.log(num1);


// // 2. let  -
// let num2 = 55;
// console.log(num2);

// let num2 = 59;
// console.log(num2);




// // 3. const -
// const num3 = 56;
// console.log(num3)

// const num3 = 59;
// console.log(num3);







// Data-Types - 
// Primitive - String | Number | Boolean | Null | Undefined
// Reference - array | Object


// let arr = [10,20,50,50,90];
// console.log(arr);

// let empObj = {
//     empName: "Ganesh Patel",
//     empSalary: 20000, 
//     empAge: 75,
//     empDes: 'Frontend engineer'
// }

// console.log(empObj);


// let num = 75;
// console.log(num);
// let copiedNum = num;
// console.log(copiedNum);

// copiedNum += 10;   // copiedNum = copiedNum + 10
// console.log(num);
// console.log(copiedNum);




// let arr = [10,20,30,50,60];
// console.log(arr);
// let copiedArr = arr;
// console.log(copiedArr);

// copiedArr.pop();
// console.log(arr);
// console.log(copiedArr);





// Operators in JavaScript - 
// Airthmatic Operators - +, -, *, /, %, **

// let num1 = 5;
// let num2 = "5";
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);





// Assignment Operators - +=, -=, *=, /=, %=, **=
// num1 += num2;      // num1 = num1 + num2;
// console.log(num1);
// console.log(num2);


// num2 *= num1;
// console.log(num1);
// console.log(num2);



// Comparison Operator - >, <, >=, <=, ==, ===, !=, !==
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);



// logical operators - 
// AND - &&
// OR  - ||
// NOT - !


// conditional statements with Logical Operators - 
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;

// if(num1 > num2 && num1 > num3 && num1 > num4){
//     console.log("num1 is greater!");
// }
// else if(num2 > num1 && num2 > num3 && num2 > num4){
//     console.log("num2 is greater!");
// }
// else if(num3 > num1 && num2 < num3 && num3 > num4){
//     console.log("num3 is greater!");
// }
// else if(num4 > num1 && num4 > num3 && num2 < num4){
//     console.log("num4 is greater!");
// }
// else{
//     console.log("all numbers are same!");
// }




// program to sort all the values in ascending order - 

if(num1 < num2 && num1 < num3 && num1 < num4){
    if(num2 < num3 && num2 < num4){
        if(num3 < num4){
            console.log(num1, num2, num3, num4);
        }else{
            console.log(num1, num2, num4, num3);
        }
    }
    else if (num3 < num2 && num3 < num4){
        if(num2 < num4){
            console.log(num1, num3, num2, num4);
        }else{
            console.log(num1, num3, num4, num2);
        }
    }
}



let day = 'thursday';

switch(day){
    case "monday":
        console.log("today is monday!");
        break;
    case "tuesday":
        console.log("today is tuesday!");
        break;
    case "wednesday":
        console.log("today is wednesday!");
        break;
    case "thursday":
        console.log("today is thursday!");
        break;
    case "friday":
        console.log("today is friday!");
        break;
    case "saturday":
        console.log("today is saturday!");
        break;
    case "sunday":
        console.log("today is sunday!");
        break;
    default:
        console.log("invalid day!");
}