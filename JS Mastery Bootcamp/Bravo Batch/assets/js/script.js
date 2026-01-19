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
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let num4 = 40;

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

// if(num1 < num2 && num1 < num3 && num1 < num4){
//     if(num2 < num3 && num2 < num4){
//         if(num3 < num4){
//             console.log(num1, num2, num3, num4);
//         }else{
//             console.log(num1, num2, num4, num3);
//         }
//     }
//     else if (num3 < num2 && num3 < num4){
//         if(num2 < num4){
//             console.log(num1, num3, num2, num4);
//         }else{
//             console.log(num1, num3, num4, num2);
//         }
//     }
// }

// let day = 'thursday';

// switch(day){
//     case "monday":
//         console.log("today is monday!");
//         break;
//     case "tuesday":
//         console.log("today is tuesday!");
//         break;
//     case "wednesday":
//         console.log("today is wednesday!");
//         break;
//     case "thursday":
//         console.log("today is thursday!");
//         break;
//     case "friday":
//         console.log("today is friday!");
//         break;
//     case "saturday":
//         console.log("today is saturday!");
//         break;
//     case "sunday":
//         console.log("today is sunday!");
//         break;
//     default:
//         console.log("invalid day!");
// }

// Control-Flow Statements -
// 1. while
// 2. do-while
// 3. for

// 1. while -
// let num = 1;

// while(num < 11){
//     console.log(num);
//     num++;
// }

// do-while -
// let num = 1;

// do{
//     console.log(num);
//     num++;
// }while(num < 11)

// for -
// for(let num = 1; num <= 10; num++){
//     console.log(num);
// }

// for(let num = 20; num > 0; num--){
//     if(num % 2 == 0){
//         console.log(num);
//     }
// }

// dialog boxes in JS -
// 1. prompt - will get input from the user
// let userName = prompt("Enter UserName - ");
// console.log(userName);

// let userInput = Number(prompt("Enter a Number : "));
// let userInput = parseInt(prompt("Enter a Number : "));
// let userInput = parseFloat(prompt("Enter a Number : "));
// console.log(userInput);
// console.log(typeof(userInput));

// let usConf = confirm("wants to sent you a notification");
// console.log(usConf);
// if(usConf){
//     console.log("you gotta a new notification!");
//     alert("you gotta a new notification!");
// }else{
//     console.log("notification blocked!");
//     alert("notification blocked!");
// }

// NESTED LOOP - FOR LOOP -
// let count = 1;

// for(let i = 1; i < 11; i++){
//     for(let j = 1; j <11; j++){
//         document.write(count);
//         count++;
//     }
//     document.write("<br>");
// }

// for(let row = 1; row <= 100; row += 10){
//     for(let col = row; col < row + 10; col++){
//         document.write(col, "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for(let row = 1; row <= 5; row++){
//     for(let col = 1; col <= row; col++){
//         document.write(col, "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// for(let row = 1; row <= 5; row++){
//     for(let col = 1; col <= row; col++){
//         document.write(row, "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }




// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1


// for(let i = 5; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         document.write(i, "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }



// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5


// for(let i = 5; i >= 1; i--){
//     let count = 5;
//     for(let j = i; j >= 1; j--){
//         document.write(count, '&nbsp;&nbsp;');
//         count--;
//     }
//     document.write("<br>");
// }




//             1
//            1  2
//           1  2  3
//          1  2  3  4
//         1  2  3  4  5


// for(let i = 1; i <= 5; i++){
//     for(k = 5; k>i; k--){
//         document.write("&nbsp;&nbsp;&nbsp;");
//     }
//     for(let j = 1; j <= i; j++){
//         document.write(i, '&nbsp;&nbsp;&nbsp;&nbsp;');
//     }
//     document.write("<br>");
// }






// functions in JS -

// let num1 = 62;
// let num2 = 765;
// let result = num1 + num2;
// console.log(result);

// console.log(num);


// function funcName(para1, para2, ....paraN){   // function declaration
//         // function body
// }

// funcName(); // function calling

// Standard Function -
// function pro(){   // function declaration
//     let num1 = 2;
//     let num2 = 3;
//     console.log(num1 * num2);
// }

// pro();    // function calling



// Parametric Function -
// function pro(num1, num2 = 54){
//     let product = num1 * num2;
//     console.log(product);
// }

// pro(2, 63);




// function pro(a, b,c){
//     return a * b * c;
// }

// let result = pro(40, 90, 10);
// console.log(result);.





// Arrays in JavaScript - 
// let arr = [10,20,30,50,6,90];

// for(let ind = 0; arr[ind] != undefined; ind++){
//     console.log(arr[ind]);
// }


// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);




let obj = {
    animalName: "Tiger",
    animalAge: 50,
    animalType: 'White'
}

for(let key in obj){
    console.log(obj[key]);
}

// console.log(obj.animalName);
// console.log(obj.animalAge);