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

// let confirmBox = confirm("wants to sent you notification!");
// console.log(confirmBox);
// if(confirmBox){
//     alert("You gotta a new notification!");
// }else{
//     alert("thanks for the feedback!");
// }

// Control-Flow Statements -
// 1. while -
// 2. do-while -
// 3. for -

// 1. while -
// let num = 1;
// while(num < 11){
//     console.log(num);
//     num++;
// }

// 2. do-while -
// let num = 1;
// do{
//     console.log(num);
//     num++;
// }while(num < 11)

// 3. for -
// for(let num = 1; num < 11; num++){
//     console.log(num);
// }

// for(let num = 2; num <= 100; num += 1){
//     if(num%2 == 0){
//         console.log(num);
//     }
// }

// for(let num = 30; num >= 20; num--){
//     console.log(num);
// }

// Nested for -

// for(let row = 1; row <= 100; row += 10){
//     for(let col = row; col < row + 10; col++){
//         if(row < 2){
//             document.write(col, "&nbsp;&nbsp;&nbsp;&nbsp;");
//         }else{
//             document.write(col, "&nbsp;&nbsp;");
//         }
//     }
//     document.write("<br>");
// }

// let count = 1;

// for(let row = 1; row <= 10; row++){
//     for(let col = 1; col <= 10; col++){
//         document.write(count, "&nbsp;&nbsp;");
//         count++;
//     }
//     document.write("<br>");
// }

// logic to identify ArmStrong Number -

// let orgNum = Number(prompt('Enter any numbers - '));
// let temp = orgNum;
// let power = 0;

// // length of user input
// while(temp > 0){
//     temp = parseInt(temp/10);
//     power++;
// }

// temp = orgNum;
// let sum = 0;

// for(let i = 1; i <= power; i++){
//     let num = temp%10;
//     sum += num ** power;   // sum = sum + num ** power
//     temp = parseInt(temp/10);
// }

// if(orgNum == sum){
//     console.log(`${orgNum} is a armstrong number!`);
// }else{
//     console.log(`${orgNum} is not a armstrong number!`);
// }

// /Nested for loop -

// for(let row = 1; row <= 100; row += 10){
//     for(let col = row; col < row + 10; col++){
//         if(row == 1){
//             document.write(col, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
//         }else{
//             document.write(col, "&nbsp;&nbsp;&nbsp;");
//         }
//     }
//     document.write("<br>");
// }

// let count = 1;

// for(let row = 1; row <= 10; row++){
//     for(let col = 1; col <= 10; col++){
//         if(row == 1){
//             document.write(count, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
//             count++;
//         }else{
//             document.write(count, "&nbsp;&nbsp;&nbsp;");
//             count++;
//         }
//     }
//     document.write("<br>")
// }

// Functions in JavaScript -

// let num1 = 10;
// let num2 = 15;
// let result = num1 + num2;
// console.log(result);

// function funcName(){
// function body
// }

// Standard Function -
// function power(){
//     let num = 7;
//     let power = num ** num;
//     console.log(power);
// }

// power();
// power();
// power();
// power();
// power();
// power();

// Parametric Function -
// function power(num1){
//     let result = num1 ** num1;
//     console.log(result);

// }

// power(5);
// power(2);
// power(4);
// power(7);
// power(8);
// power(2);

// Functon with return value -
// function power(num){
//     return num ** num;
// }

// power(3);

//
// let hnMarks = Number(prompt("Enter hindi marks - "));
// let enMarks = Number(prompt("Enter english marks - "));
// let scMarks = Number(prompt("Enter science marks - "));
// let sstMarks = Number(prompt("Enter sst marks - "));
// let mMarks = Number(prompt("Enter maths marks - "));

// function obt_marks(hnMarks, enMarks, scMarks, sstMarks, mMarks) {
//   let obtMarks = hnMarks + enMarks + scMarks + sstMarks + mMarks;
//   return obtMarks;
// }


// function percentage(obt_marks, tMarks) {
//   let percent = (obt_marks / tMarks) * 100;
//   return percent;
// }


// function result(std_name, obt_marks, tMarks, per) {
//   if (per > 80 && per <= 100) {
//     console.log(
//       `${std_name} has got ${obt_marks} out of ${tMarks} marks and scored ${per}% and secured 'A' grade!`,
//     );
//   } else if (per > 60 && per <= 80) {
//     console.log(
//       `${std_name} has got ${obt_marks} out of ${tMarks} marks and scored ${per}% and secured 'B' grade!`,
//     );
//   } else if (per > 40 && per <= 60) {
//     console.log(
//       `${std_name} has got ${obt_marks} out of ${tMarks} marks and scored ${per}% and secured 'C' grade!`,
//     );
//   } else if (per >= 33 && per <= 40) {
//     console.log(
//       `${std_name} has got ${obt_marks} out of ${tMarks} marks and scored ${per}% and secured 'A' grade!`,
//     );
//   } else {
//     console.log(`aap fail ho chuke hai!`);
//   }
// }

// let ob_marks = obt_marks(hnMarks, enMarks, scMarks, sstMarks, mMarks);
// let percent = percentage(ob_marks, 500);


// result("Utkarsh", ob_marks, 500, percent);

// message();



// 
// console.log(count);

// function message(){
//     console.log("Hello By User!");
// }

// message();



// const count = 58;
// console.log(count);




// Array in JavaScript - 
let arr = [10,20,30,50,9,60];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);

// for(let ind = 0; ind < arr.length; ind++){
//     console.log(arr[ind]);
// }

// for(let ind = 0; arr[ind] != undefined; ind++){
//     console.log(arr[ind]);
// }




// Objects in JavaScript -
let obj = {
    lapName: "Vivobook",
    lapPrice: 80000,
    lapPrcoess: "i5"
}

// console.log(obj.lapName);
// console.log(obj.lapPrcoess);
// console.log(obj.lapPrice);

// for(let key = 0; key < Object.keys(obj).length; key++){
//     console.log(`${Object.keys(obj)[key]} : ${obj[Object.keys(obj)[key]]}`)
// }

for(let key in obj){
    console.log(`${key} : ${obj[key]}`)
}

// console.log(obj[Object.keys(obj)[2]]);

