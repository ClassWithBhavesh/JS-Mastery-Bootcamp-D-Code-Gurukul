// Variable -

// num = 1452;
// console.log(num);

// to delcare a variable in JS we need three keyword -
// 1. var
// 2. let
// 3. const

// difference b/w let, var and const -

// 1. decalaration basis
// var - re-decalartion and re-assignment both are possible using var keyword
// var num1 = 14;
// console.log(num1);
// var num1 = 58;
// console.log(num1);

// let - re-decalartion is not possible but re-assignments are possible using let keyword
// let num2 = 15;
// console.log(num2);
// let num2 = 74;
// console.log(num2);

// const - re-decalartion and re-assignment both are not possible using const keyword
// const num3 = 16;
// console.log(num3)
// num3 = 74;
// console.log(num3);

// Data-Type -
// primitive - number | string | boolean | null | undefined
// reference - Array | object

// let num = 15;
// console.log(typeof(num));
// let boolVar = true;
// console.log(typeof(boolVar));
// let str = "JavaScript";
// console.log(typeof(str));
// let num = null;
// console.log(typeof(num));
// let num = undefined;
// console.log(typeof(num));

// reference -
// let arr = [10,20,30,50,60];
// console.log(arr);

// let empObj = {
//     empName: "Ankit",
//     empAge: 19,
//     empSalary: 50000
// };
// console.log(empObj);

// let num = 52;
// let copiedNum = num;
// console.log(num);
// console.log(copiedNum);
// copiedNum += 12          // copiedNum = copiedNum + 12
// console.log(num);
// console.log(copiedNum);

// let arr = [10,20,30,50,690];
// let copiedArr = arr;
// console.log(arr);
// console.log(copiedArr);

// copiedArr.pop();
// console.log(arr);
// console.log(copiedArr);

// Operators in JS -
// 1. Airthmatic Operators - +, -, *, /, **, %
// let num1 = 5;
// let num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);

// 2. Assignment Operator - +=, -=, *=, /=, %=, **=

// let num1 = 74;
// let num2 = 13;

// num2 += num1     // num2 = num2 + num1
// console.log(num1);
// console.log(num2);

// num1 *= num1     // num1 = num1 + num1
// console.log(num1);
// console.log(num2);

// num1 -= num2     // num1 = num1 + num1
// console.log(num1);
// console.log(num2);

// 3. Comparison Operators - >, <, >=, <=, ==, ===, !=
// let num1 = '95';
// let num2 = 95;

// console.log(num1 < num2);
// console.log(num1 > num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(num1 != num2);

// 4. Logical Operators -
// 1. AND - &&
// 2. OR  - ||
// 3. NOT - !

// let num1 = 30;
// let num2 = 10;
// let num3 = 20;

// conditional statements - Lif | else | else if

// if(num1 < num2 && num1 < num3){
//     console.log("num1 is smaller!");
// }
// else if(!(num2 < num1 && num2 < num3)){
//     console.log("num2 is smaller!");
// }
// else if(num3 < num1 && num3 < num2){
//     console.log("num3 is smaller!");
// }
// else{
//     console.log("All Values are equal");
// }


// ctrl + k + s --> for all shortcuts in VS Code




// Nested if -

// let num1 = 3;
// let num2 = 10;
// let num3 = 2;

// if(num1 < num2 && num1 < num3){
//     if(num2 < num3){
//         console.log("num1, num2, num3");
//     }
//     else if(num3 < num2){
//         console.log("num1, num3, num2");
//     }
//     else{
//         console.log("num2 and num3 are equal! please provide unique values to sort them!");
//     }
// }
// else if(num2 < num3 && num2 < num1){
//     if(num1 < num3){
//         console.log("num2, num1, num3");
//     }else{
//         console.log("num2, num3, num1");
//     }
// }
// else if(num3 < num2 && num3 < num1){
//     if(num1 < num2){
//         console.log("num3, num1, num2");
//     }else{
//         console.log("num3, num2, num1");
//     }
// }
// else{
//     console.log("All are equal, please provide different values!");
// }





// Switch Case - 
// let day = 'sunday';

// switch(day){
//     case 'sunday':
//         console.log("today is sunday!");
//         break;
//     case 'monday':
//         console.log("today is monday!");
//         break;
//     case 'tuesday':
//         console.log("today is tuesday!");
//         break;
//     case 'wednesday':
//         console.log("today is wednesday!");
//         break;
//     case 'thursday':
//         console.log("today is thursday!");
//         break;
//     case 'friday':
//         console.log("today is friday!");
//         break;
//     case 'saturday':
//         console.log("today is saturday!");
//         break;
//     default:
//         console.log("invalid day!");
// }




// Dialogue Boxes - 
// let userName = prompt("Enter the user name : ");
// console.log(userName);

let confirmBox = confirm("wants to sent you notification!");
// console.log(confirmBox);
if(confirmBox){
    alert("You gotta a new notification!");
}else{
    alert("thanks for the feedback!");
}