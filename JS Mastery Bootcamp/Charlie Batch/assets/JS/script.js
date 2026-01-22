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
// let arr = [10,20,30,50,9,60];
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
// let obj = {
//     lapName: "Vivobook",
//     lapPrice: 80000,
//     lapPrcoess: "i5"
// }

// console.log(obj.lapName);
// console.log(obj.lapPrcoess);
// console.log(obj.lapPrice);

// for(let key = 0; key < Object.keys(obj).length; key++){
//     console.log(`${Object.keys(obj)[key]} : ${obj[Object.keys(obj)[key]]}`)
// }

// for(let key in obj){
//     console.log(`${key} : ${obj[key]}`)
// }

// console.log(obj[Object.keys(obj)[2]]);





// 

// let userInput = Number(prompt("Enter a number - "));
// let temp = userInput;
// let count = 0;

// while(temp > 0){
//     temp = parseInt(temp/10);
//     count++;
// }
// temp = userInput;
// let num = 0;

// for(let i = 1; i <= count; i++){
//     let splitValue = temp%10;
//     num += splitValue ** count;
//     temp = parseInt(temp/10);
// }

// if(num == userInput){
//     console.log(`${userInput} is a armstrong numebER!`);
// }else{
//     console.log(`${userInput} is not a armstrong numebER!`);
// }








// Array Methods - 

// // 1. Sort :

// var arr = ["amrit","arpit","Neha","sita","Pramod","isha"];
// let arr = [1,4,1,52,6,3,9,5,8,96,2];
// document.write(arr + "<br><br>");
// arr.sort(); 
// arrName.sort().reverse();
// document.write(arr + "<br>");



// // 2. .reverse() :

// let ary = ["arpit", "sakshi", "titu", 10];
// document.write(ary +"<br><br>")
// ary.reverse();
// // ary.sort().reverse();
// document.write(ary);




// // 3. Pop :

// var arr = ["arpit", "shikha", "aman", "priya"];
// document.write(arr +"<br><br>");
// arr.pop();
// document.write(arr);



// // 4. Push :

// var arr = ["arpit", "shikha", "aman", "priya"];
// console.log(arr, "<br><br>");
// document.write(arr, "<br><br>");
// arr.push(["rahul", "Shobit", "Shobha"]);
// document.write(arr, "<br><br>");
// console.log(arr);




// // 5. shift :

// var arr = ["arpit", "shikha", "aman", "priya"];
// document.write(arr, "<br><br>");
// arr.shift();
// // arr.shift();
// document.write(arr);




// // 6. unShift :

// var arr = ["arpit", "shikha", "aman", "priya"];
// document.write(arr, "<br><br>");
// arr.unshift("shalini", "shobha");
// document.write(arr);



// 7. concat :
// var a = [10,20,"Rahul"];
// document.write(a +"<br><br>");
// console.log(a);
// var b = a.concat("sanjay",10,50);
// console.log(b);
// document.write(b);
// let c = a.concat(b);
// console.log(c);
// let e = a.concat(a, b, c);
// console.log(e);



// // 8. Join :

// var a = [10,50,"Rahul","shikha"];
// // var b = ["shobha", "geeta", "sita"];
// var c = a.join(",");
// document.write(c, "<br>");
// document.write(typeof(c));



// // 10. slice :

// var h = [10, 20, 45, 30, 40];
// document.write(h +"<br><br>");
// var b = h.slice(1, 4);
// document.write(b +"<br><br>");
// document.write(h);




// // 11. Splice :

// var a = ["Rahul", 50, 80, 95, 60];
// document.write(a +"<br><br>");
// // var c = a.splice(index, how many delete, new value);
// a.splice(3, 1, "Aman", 10);
// document.write(a + "<br><br><br>");



// // 12. isArray : 

// var arr = [10, 50 ,40 ,"Sahil"];
// if(Array.isArray(arr)){
//     document.write("Yess, this is an array.")
// }else{
//     document.write("No, This not an array")
// }




// // 13. indexOf :

// var b = [10, 20, 45, 30, 20, 45, 54, 45];
// var a = b.indexOf(20, 5);
// document.write(a);
// var a = b.indexOf(search  , start);




// // 14. lastIndexOf : 

// var g = ["Str", 30, 50, 45, 50, 45, 50,true];
// var h = g.lastIndexOf(50, 5); // g.lastIndexOf(seacrh item)
// document.write(h);




// // 15. Includes :

// var ary = ["Sagar", "Atul", "Sanjay"];
// var h = ary.includes("Atul");
// document.write(h + "<br><br><br><br>");




// let ages = (age) => {   // Fat-Arrow Function (Arrow-Functions) | Function Expression
//     return age >= 18;
// }

// // 16. Some :
// var age = [10, 50, 18];
// document.write(age + "<br><br>");
// // var check = age.some(ages)
// // var check = age.some(function (age){
// //     return age >= 18;
// // });
// let check = age.some((age) => {
//     return age >= 18;
// });
// document.write(check);



// function ages(age){
//     return age > 18;
// }



// // 17. Every : 

// var k = [20, 50, 80];
// document.write(k + "<br><br><br>");
// var y = k.every(ages);
// document.write(y);




// // 18. Find :
// var p = [10, 22, 55, 19, 50];
// document.write(p + "<br><br><br>");
// var l = p.find(ages);
// document.write(l);



// 19. FindIndex : 
// let q = [10, 15, 18, 50];
// document.write(q + "<br><br><br>");
// var r = q.findIndex(ages);
// document.write(r);





// .filter() :

// var a = [10,12,15,20,45,5,70];
// document.write(a + "<br><br>");
// var b = a.filter(ages);
// document.write(b + "<br>");

// function ages(a){
//     return a % 2 == 0;
// }




// // 21. toString : 

// var t = ["Rahul", 50, 48, "Sanjeev"];
// console.log(t);
// document.write(t + "<br><br><br>")
// document.write(typeof(t) + "<br><br><br>");
// var str = t.toString();
// document.write(str + "<br><br><br>");
// document.write(typeof(str));




// 22. .forEach() :

// let ary = ["Neha", 50, true, "Saddam"];
// let a = ary.forEach(function(val, i){
//     return val + 20;
// })

// ary.forEach((val, i) => {
//     document.write(i + " : " + val + "<br>");
// })

// for(let i = 0; i < ary.length; i++){
//     document.write( i + "-" + ary[i] + "<br>");
// }



// 23. .map() - 
// let arr = [10,20,30,40,50,60];
// let b = arr.map((val, ind) => {
//     return val + 10;
// })



// console.log(a);
// console.log(b);



// 24. .reduce() : 
// let arr = [10,20,30,50,60,60];

// let result = arr.reduce((acc, curr) => {
//     return acc * curr;
// })

// console.log(result);






// Stirngs Methods - 

// // 1. Length :
// var str = "This is a JavaScript Tutorial.";
// document.write(str + "<br><br>");
// var l = str.length;
// document.write(l + "<br><br>");

// // 2. toLowerCase :
// var str = "Let's See the SECOND String Method";
// document.write(str + "<br><br>");
// var l = str.toLowerCase();
// document.write(l + "<br><br>");

// // 3. toUpperCase :
// var str = "let's see the third string method";
// document.write(str + "<br>");
// var u = str.toUpperCase();
// document.write(u + "<br>");

// // 4. includes :
// var str = "let's see the fourth string method";
// var i = str.includes("let's see");
// document.write(i + "<br>");

// // 5. startsWith :
// var str = "let's see the fifth string method";
// var i = str.startsWith("le");
// document.write(i + "<br>"); 

// // 6. endsWith :
// var str = "let's see the sixth string method!";
// var i = str.endsWith("method");
// document.write(i + "<br>");



// // 7. search :
// var str = "let's see the sixth string method";
// var i = str.search("s");
// document.write(i + "<br>");

// // 8. match :
// var str = "let's see the eigth string method";
// var i = str.match(/z/g);
// var i = str.match("z");
// document.write(i + "<br>");
// document.write(typeof(i));
// console.log(i);

// // 9. indexOf :
// var str = "let's see the ninth string method";
// var i = str.indexOf("s", 10);
// document.write(i + "<br>");

// // 10. lastIndexOf :
// var str = "let's see the ninth string method";
// var i = str.lastIndexOf("h", 25);
// document.write(i + "<br>");

// // 11. replace :
// var str = "let's see the ninth see string see method see";
// document.write(str + "<br>");
// // var i = str.replace("see", "move"); // (// can be used for more then one replace)
// var i = str.replace(/see/g, "move"); // (// can be used for more then one replace)
// document.write(i + "<br>");



// // 12. trim :
// var str = "      Hello       Students";
// var str1 = "      Hello       Students";
// document.write(str);
// console.log(str);
// document.write(str);
// var a = str.trim();
// console.log(a);
// console.log(str.concat(str1))

// // 13. charAt :
// var str = "let's see the ninth string method";
// var i = str.charAt(11); // (// can be used for more then one replace)
// document.write(i + "<br>");

// // 14. charCodeAt :
// var str = "let's see the ninth string method";
// var i = str.charCodeAt(32);
// document.write(i + "<br>");

// var i = String.fromCharCode(67);
// document.write(i + "<br>"); 

// 15. concat  :
// var str = "I'm a student";
// var s = " and i belong to Indore";
// var a = str.concat(s);
// document.write(a + "<br>");




// // 16. split :
// var str = "JavaScript is a intresting language";
// var a = str.split("h");
// document.write(a + "<br>");

// // 17. repeat :
// var str = "JavaScript is a intresting language";
// var a = str.repeat(3);
// document.write(a + "<br>");

// // 18. slice :
// var str = "JavaScript is a intresting language";
// // var a = str.slice(10);
// var a = str.slice(10, 20);
// document.write(a + "<br>");

// // 19. substr :
// var str = "JavaScript is a intresting language";
// var a = str.substr(3,10);
// document.write(a + "<br>");

// // // 20. substring :
// var str = "JavaScript is a intresting language";
// var a = str.substring(3,12);
// document.write(a + "<br>");

// // 21. toString :
// var st = 25014;
// var str = st.toString();
// document.write(str + "<br>");
// document.write(typeof(str));






// "DOM Targeting Methods" -

// let divEle = document.getElementsByTagName("div");
// console.log(divEle);


// let classEle = document.getElementsByClassName("container");
// console.log(classEle);


// let uniqueEle = document.getElementById("cont1");
// console.log(uniqueEle);



// let tagEle = document.querySelector("div");
// console.log(tagEle);


// let classEle = document.querySelector(".container");
// console.log(classEle);


// let unqiueEle = document.querySelector("#cont3");
// console.log(unqiueEle);


// let unqiueEle = document.querySelectorAll("#cont");
// console.log(unqiueEle);


// let unqiueEle = document.querySelectorAll(".container");
// console.log(unqiueEle);



// Event Handling -

function show_message(){
    alert("Hello From JavaScript");
}

let btn = document.querySelector("#btn");
// btn.ondblclick = show_message;


// btn.addEventListener("click", () => {
//     alert("On Click Event Triggered!");
// })


// btn.addEventListener("dblclick", () => {
//     alert("On Click Event Triggered!");
// })


// btn.addEventListener("contextmenu", () => {
//     alert("On Click Event Triggered!");
// })


// btn.addEventListener("mouseenter", () => {
//     alert("On Click Event Triggered!");
// })


// btn.addEventListener("mouseleave", () => {
//     alert("On Click Event Triggered!");
// })


// document.addEventListener("keypress", () => {
//     alert("On Click Event Triggered!");
// })


// document.addEventListener("keyup", () => {
//     alert("On Click Event Triggered!");
// })


// document.addEventListener("keydown", () => {
//     alert("On Click Event Triggered!");
// })


// document.addEventListener("scroll", () => {
//     alert("On Click Event Triggered!");
// })


// document.addEventListener("load", () => {
//     alert("On Click Event Triggered!");
// })