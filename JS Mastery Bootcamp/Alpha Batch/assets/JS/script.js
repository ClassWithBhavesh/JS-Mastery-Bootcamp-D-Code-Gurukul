// Variable in JS - 
// they are like containers which will store some amount of data or value
// entity which is able to change anytime or anywhere

// declaration of variable in JS - 
// 1. Declaration basis -
// var   - 
// var num = 458;
// // document.write(num)
// console.log(num);
// var num = 54;
// console.log(num);

// // let   - 
// let num1 = 98;
// console.log(num1);
// // let num1 = 62;
// // console.log(num1);

// // const -
// const num2 = 45;
// console.log(num2);
// // const num2 = 85;
// // console.log(num2);




// Data-Types in JS -

// let num = undefined;
// console.log(num);
// console.log(typeof(num));


// typeof(Arr)ays in JS - 
// let arr = [10,20,303,40,50,60];
// console.log(arr);
// console.log(typeof(arr));


// objects in js -
// let empObj = {
//     empName: "Nandini",
//     empAge: 18,
//     empSalary: 120000
// };
// console.log(empObj);
// console.log(typeof(empObj));





// let count = 178;
// console.log(count);
// let copiedCount = count;
// console.log(copiedCount);
// copiedCount = copiedCount + 10;
// console.log(copiedCount);
// console.log(count);


// let arr = [10,20,30,40];
// // console.log(arr);
// let copiedArr = arr;
// // console.log(arr);
// copiedArr.pop();
// console.log(copiedArr)
// console.log(arr)



// Operators - 
// 1. Airthmatic - +, -, *, /, %, **

// let num1 = 10;
// let num2 = 58;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num1);


// 2. Assignment Operators - +=, -=, *=, /=, ++, --, %=, **=

// let num1 = 5
// let num2 = 10
// console.log("before assignment - " + num1);
// console.log("before assignment - " + num2);

// // num1 += num2;   // num1 = num1 + num2
// num2 += num1;   // num2 = num2 + num1
// console.log("after assignment - " + num1);
// console.log("after assignment - " + num2);





// Comparison Operators -   <, >, <=, >=, ==, ===, !=, !==
// let num1 = '45';
// let num2 = 45;

// console.log(num1 == num2);
// console.log(num1 === num2);

// console.log(num1 > num2);
// console.log(num2 > num1);
// console.log(num2 >= num1);
// console.log(num2 > num1);
// console.log(num1 <= num2);
// console.log(num2 < num1);
// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);





// Logical Operators - 
// AND - &&
// OR  - ||
// NOT - !


// let num1 = 101; 
// let num2 = 20.254896; 
// let num3 = 30;

// if(!(num1 > num2 && num1 > num3)){
//     console.log("Num1 is greater!");
// }
// else if(num2 > num1 && num2 > num3){
//     console.log("Num2 is greater!");
// }
// else if(num3 > num1 && num3 > num2){
//     console.log("Num3 is greater!");
// }
// else{
//     console.log("All Number are Equal!");
// }





// nested if - 
// let num1 = 10; 
// let num2 = 2; 
// let num3 = 30; 
// let num4 = 14; 

// if(num1 < num2 && num1 < num3 && num1 < num4){
//     if(num2 < num3 && num2 < num4){
//         if(num3 < num4){
//             console.log("num1, num2, num3, num4");
//         }else{
//             console.log("num1, num2, num4, num3");
//         }
//     }
//     else if(num3 < num4 && num3 < num2){
//         if(num2 < num4){
//             console.log("num1, num3, num2, num4");
//         }else{
//             console.log("num1, num3, num4, num2");
//         }
//     }
//     else {
//         if(num2 < num3){
//             console.log("num1, num4, num2, num3");
//         }else{
//             console.log("num1, num4, num3, num2");
//         }
//     }
// }
// else if(num2 < num1 && num2 < num3 && num2 < num4){
//     if(num1 < num3 && num1 < num4){
//         if(num3 < num4){
//             console.log("num2, num1, num3, num4");
//         }else{
//             console.log("num2, num1, num4, num3");
//         }
//     }
//     else if(num3 < num4 && num3 < num1){
//         if(num1 < num4){
//             console.log("num2, num3, num1, num4");
//         }else{
//             console.log("num2, num3, num4, num1");
//         }
//     }
//     else {
//         if(num1 < num3){
//             console.log("num2, num4, num1, num3");
//         }else{
//             console.log("num2, num4, num3, num1");
//         }
//     }
// }
// else if(num3 < num1 && num2 > num3 && num3 < num4){
//     if(num1 < num2 && num1 < num4){
//         if(num2 < num4){
//             console.log("num3, num1, num2, num4");
//         }else{
//             console.log("num3, num1, num4, num2");
//         }
//     }
//     else if(num2 < num4 && num2 < num1){
//         if(num1 < num4){
//             console.log("num3, num2, num1, num4");
//         }else{
//             console.log("num3, num2, num4, num1");
//         }
//     }
//     else {
//         if(num1 < num2){
//             console.log("num3, num4, num1, num2");
//         }else{
//             console.log("num3, num4, num2, num1");
//         }
//     }
// }
// else{
//     if(num1 < num2 && num1 < num3){
//         if(num2 < num3){
//             console.log("num4, num1, num2, num3");
//         }else{
//             console.log("num4, num1, num3, num2");
//         }
//     }
//     else if(num2 < num3 && num2 < num1){
//         if(num1 < num3){
//             console.log("num4, num2, num1, num3");
//         }else{
//             console.log("num4, num2, num3, num1");
//         }
//     }
//     else {
//         if(num1 < num2){
//             console.log("num4, num3, num1, num2");
//         }else{
//             console.log("num4, num3, num2, num1");
//         }
//     }
// }






// Dialogue Boxes - 
// prompt - user input lene ke liye
// confirm - user se confirmation ke liye 
// alert - to display some message or warning on to the browser


// user input - prompt -
// to type cast the user input - Number, parseInt, parseFloat
// let userInput = Number(prompt("Enter a number : "));
// console.log(userInput);
// console.log(typeof(userInput));



// /confirmation ke liye - confirm box -
// let userConf = confirm("wants to sent you a notification!");
// console.log(userConf);

// if(userConf){
//     alert("you got a new notification!");
// }else{
//     alert("thanks, for the feedback!");
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
//         console.log("Invalid Day!")       
// }







// control-flow statements - 
// while - 
// do-while
// for


// 1. while -
// let num = 1;
//  while(num <= 10){
//     console.log(num);
//     num++;
//  }


// do-while - 

// let num = 1;
// do{
//     console.log(num);
//     num++;
// }while(num < 11)



// for - 

for(let num = 1; num < 11; num++){
    console.log(num);
}