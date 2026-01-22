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

// Traditional method to iterate an object using for loop -
// console.log(Object.keys(obj));

// for(let key = 0; key < Object.keys(obj).length; key++){
//     console.log(Object.keys(obj)[key] + " : " + obj[Object.keys(obj)[key]]);
// }


// for(let key in obj){
//     console.log(`${key} : ${obj[key]}`);
// }



// modern for loop for object iteration -
// for(let key in obj){
//     console.log(obj[key]);
// }

// console.log(obj.animalName);
// console.log(obj.animalAge);




// Array methods - 

// // 1. .sort() :
// var arr = ["amrit","arpit","Neha","sita","Pramod","isha"];
// // let arr = [1,4,1,52,6,3,9,5,8,96,2];
// document.write(arr + "<br><br>");
// arr.sort(); 
// document.write(arr + "<br>");


// // 2. .reverse() :

// let ary = ["arpit", "sakshi", "titu", 10];
// document.write(ary +"<br><br>")
// // ary.reverse();
// ary.sort().reverse();
// document.write(ary);


// // 3. Pop :

// var arr = ["arpit", "shikha", "aman", "priya"];
// document.write(arr +"<br><br>");
// arr.pop();
// document.write(arr);





// // 4. Push :

// var arr = ["arpit", "shikha", "aman", "priya"];
// document.write(arr, "<br><br>");
// console.log(arr, "<br><br>");
// arr.push(["rahul", 45, true, "undefined"]);
// document.write(arr);
// console.log(arr, "<br><br>");



// // 5. shift :

// var arr = ["arpit", "shikha", "aman", "priya"];
// document.write(arr, "<br><br>");
// arr.shift();
// arr.shift();
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
// document.write(b, "<br>");
// document.write(a);
// let c = a.concat(b);
// console.log(c);
// let e = a.concat(a, b, c);
// console.log(e);



// // 8. Join :

// var a = [10,50,"Rahul","shikha"];
// // var b = ["shobha", "geeta", "sita"];
// var c = a.join(" ");
// document.write(c);
// console.log(typeof(c));





// // 9. slice :

// var h = [10, 20, 45, 30, 40];
// document.write(h +"<br><br>");
// var b = h.slice(1, 4);
// // b.pop();
// document.write(b +"<br><br>");
// document.write(h);


// // 10. Splice :

// var a = ["Rahul", 50, 80, 95, 60];
// document.write(a +"<br><br>");
// // var c = a.splice(index, how many delete, new value);
// a.splice(2, 0, "Aman", 10);
// document.write(a + "<br><br><br>");




// // 12. isArray : 

// var arr = [10, 50 ,40 ,"Sahil"];

// if(Array.isArray(arr)){
//     document.write("Yess, this is an array.")
// }else
// {
//     document.write("No, This not an array")
// }




// // 13. indexOf :

// var b = [10, 20, 45, 30, 20, 45, 54, 20, 45];
// var a = b.indexOf(20, 5);
// document.write(a);
// var a = b.indexOf(search  , start);



// // 14. lastIndexOf : 

// var g = ["Str", 30, 50, 45, 50, 45, 50,true];
// var h = g.lastIndexOf(50, 3); // g.lastIndexOf(seacrh item)
// document.write(h);




// // 15. Includes :

// var ary = ["Sagar", "Atul", "Sanjay"];
// var h = ary.includes("Sagar", "Atul");
// document.write(h + "<br><br><br><br>");




// // 16. Some :
// var age = [10, 50, 18];
// document.write(age + "<br><br>");
// var check = age.some((age) => {
//     return age >= 18;
// });
// var check = age.some(function (age){
//     return age >= 18;
// });

// let ages = (age) => {
//     return age >= 18;
// }

// var check = age.some(ages);
// document.write(check + "<br><br>");



// function ages (age){
//     return age >= 18;
// }


// function ages(n){
//     return n > 18;
// }


// function (num){
//     return num > 18;
// }





// // 16. Every : 

// var k = [20, 50, 80];
// document.write(k + "<br><br><br>");
// var y = k.every(ages);
// document.write(y);






// // 18. Find :
// var p = [10, 2, 55, 19, 50];
// document.write(p + "<br><br><br>");
// var l = p.find(ages);
// document.write(l);

// function ages(p){
//     return p >= 20;
// }

// 19. FindIndex : 
// let q = [10, 15, 14, 50];
// document.write(q + "<br><br><br>");
// var r = q.findIndex(ages);
// document.write(r);

// function ages(q){
//     return q >= 18;
// }




// // 20. Filter :

// var a = [10,12,15,20,45,5,70];
// document.write(a + "<br><br>");
// var b = a.filter((ages) => {
//     return ages < 18;
// });
// document.write(b + "<br>");

// function ages(a){
//     return a >= 40
// }




// // 21. toString : 

// var t = ["Rahul", 50, 48, "Sanjeev"];
// console.log(t);
// document.write(t + "<br><br><br>")
// var str = t.toString();
// document.write(str);
// console.log(typeof(str));


// forEach - 
// // 22. Array forEach Loop :

// let ary = ["Neha", 50, true, "Saddam"];
// ary.forEach(function(val, i){
//     document.write(i + " : " + val + "<br>");
// })

// let ele = ary.forEach((value, ind) => {
//     document.write(ind + " : " + value + "<br>");
// })

// document.write(ele);

// for(let i = 0; i < ary.length; i++){
//     document.write( i + "-" + ary[i] + "<br>");
// }



// 23. .map() : 

// let ab = ary.map((value, ind) => {
//     return value + 10;
// })

// document.write(ab);



// 24. .reduce() : 
// let arr = [40,50,80,20,90,30,];
// // document.write(arr);
// let result = arr.reduce((acc, curr) => {
//     return acc + curr;
// })

// document.write(result);











// String Methods -

// // 1. Length :
// var str = "This is a JavaScript Tutorial.";
// var l = str.length;
// document.write(l + "<br><br>");



// // 2. toLowerCase :
// var str = "Let's See the SECOND String Method";
// document.write(str + "<br><br>");
// var l = str.toLowerCase();
// document.write(l + "<br><br>");




// // 3. toUpperCase :
// var str = "let's see the third string method";
// document.write(str + "<br><br>");
// var u = str.toUpperCase();
// document.write(u + "<br>");




// // 4. includes :
// var str = "let's see the fourth string method";
// var i = str.includes("let's see");
// document.write(i + "<br>");




// // 5. startsWith :
// var str = "let's see the fifth string method";
// var i = str.startsWith("let's");
// document.write(i + "<br>"); 




// // 6. endsWith :
// var str = "let's see the sixth string method!";
// var i = str.endsWith("method");
// document.write(i + "<br>");




// // 7. search :
// var str = "let's see the sixth string method";
// var i = str.search("string");
// document.write(i + "<br>");




// // 8. match :
// var str = "let's see the eigth string method";
// // var i = str.match("t");
// var i = str.match(/t/g);
// document.write(i + "<br>");
// document.write(typeof(i));
// console.log(typeof(i));
// console.log(i);




// // 9. indexOf :
// var str = "let's see the ninth string method";
// var i = str.indexOf("s", 9);
// document.write(i + "<br>");




// // 10. lastIndexOf :
// var str = "let's see the ninth string method";
// var i = str.lastIndexOf("h");
// document.write(i + "<br>");




// // 11. replace :
// var str = "let's see the ninth see string see method see";
// document.write(str + "<br>");
// // var i = str.replace("see", "move"); // (// can be used for more then one replace)
// var i = str.replace(/see/g, "move"); // (// can be used for more then one replace)
// document.write(i + "<br>");




// // 12. trim :
// var str = "      Hello       Students";
// document.write(str);
// console.log(str);
// document.write(str);
// var a = str.trim();
// console.log(a);




// // 13. charAt :
// var str = "let's see the ninth string method";
// var i = str.charAt(12);
// document.write(i + "<br>");




// // 14. charCodeAt :
// var str = "let's see the ninth string method";
// var i = str.charCodeAt(3);
// document.write(i + "<br>");




// var i = String.fromCharCode(65,66,67,68,69);
// document.write(i + "<br>"); 





// 15. concat  :
// var str = "I'm a student";
// var s = " and i belong to Indore";
// var a = str.concat(s);
// document.write(a + "<br>");




// // 16. split :
// var str = "JavaScript is a intresting language";
// var a = str.split("");
// document.write(a + "<br>");
// document.write(typeof(a));




// // 17. repeat :
// var str = "JavaScript is a intresting language";
// var a = str.repeat(3);
// document.write(a + "<br>");



// // 18. slice :
// var str = "JavaScript is a intresting language";
// // var a = str.slice(10);
// var a = str.slice(-10, 20);
// document.write(a + "<br>");


// let ar  = [10,20,30,60,90,41];
// let newSlice = ar.slice(-5, 5)
// document.write(newSlice);


// // 19. substr :
// var str = "JavaScript is a intresting language";
// var a = str.substr(3,6);
// document.write(a + "<br>");




// // 20. substring :
// var str = "JavaScript is a intresting language";
// var a = str.substring(3,6);
// document.write(a + "<br>");




// // 21. toString :
// var st = 25014;
// var str = st.toString();
// document.write(str + "<br>");
// document.write(typeof(str));






// Event handlers - 

// let divEle = document.getElementsByTagName("div");
// console.log(divEle);

// let classEle = document.getElementsByClassName("container");
// console.log(classEle);

// let uniqueEle = document.getElementById("cont");
// console.log(uniqueEle);



// querySelector & querySelectorAll

// let ele = document.querySelector("div");
// console.log(ele);

// let ele = document.querySelectorAll(".container1");
// console.log(ele);

// let ele = document.querySelector("#cont3");
// console.log(ele);






function showMessage(){
    alert("Hello From JavaScript!");
}


let btn_ele = document.querySelector("#btn");
console.log(btn_ele);


// btn_ele.onclick = showMessage; deprecated due the performance lack in huge scale application


// btn_ele.addEventListener("click", () => {
//     alert("Hello From JavaScript!");
// })

// btn_ele.addEventListener("click", showMessage);

// btn_ele.addEventListener("dblclick", () => {
//     alert("Double Click Event!");
// })


// btn_ele.addEventListener("contextmenu", () => {
//     alert("context menu Event! (Right kilik wala!)");
// })


// btn_ele.addEventListener("mouseenter", () => {
//     alert("context menu Event! (Right kilik wala!)");
// })



// btn_ele.addEventListener("mouseleave", () => {
//     alert("context menu Event! (Right kilik wala!)");
// })


// btn_ele.addEventListener("keypress", () => {
//     alert("context menu Event! (Right kilik wala!)");
// })


// document.addEventListener("keypress", () => {
//     alert("You pressed some keys!");
// })



// document.addEventListener("keyup", () => {
//     alert("You pressed some keys!");
// })



// document.addEventListener("keydown", () => {
//     alert("You pressed some keys!");
// })



// document.addEventListener("scroll", () => {
//     alert("You pressed some keys!");
// })





