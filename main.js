// string bolean number array undefined
// 
// DRY 
// var - let - const
// if - else - else if
// switch - case

// var name1 = "Ulfet"
// name1 = "Samir"
// name1 = "Ehmed"
// const password = "123546"
// console.log(password);
// let age = 19
// age = 20
// console.log(age);

// var myArray = [5,4,7,3,5]
// console.log(myArray);


// let k317 = ["Samir", "Elnur", "Ulfet", "Ehmed","Nihad","Hesen","Eli","Orxan"]

// console.log(k317);
// console.log(k317[0]);
// console.log(k317.length);

// for (let i = 0; i < k317.length; i++) { 
//     console.log(k317[i]);
// }


// let numbers = [1,2,3,4,5,6,7,8,9,12,14,16]

// for (let j = 0; j < numbers.length; j++) {
//     // 1,2,3,4
//     if (numbers[j]%2==0) { // 1,2,3,4
//         console.log(numbers[j]); // 2,4
//     }
// }


// let k317 = ["Samir", "Elnur"]
// let k313 = ["Musa","Cavid"]
// k317.shift() // ilk elementi silir
// k317.unshift("Ulfet") // evvele elave edir
// k317.pop() // son elementi silir
// k317.push("Samir") // sona elave edir
// k317.map(x=>console.log(x))
// k317[2] = "Musa"
// k317[3] = "Cavid"

// console.log(k317);


// let a = 5
// let b = 3
// let c = 4
// b = c // b = 4
// a = b // a = 4

// console.log(a); // 3, 3, 4,
// console.log(b); // 4, 4, 3,
// // console.log(c); // 5, 4, 4,

// let a = 5
// let b = 3
// let c = 4

// a = b
// b = c

// console.log(a); // 3 
// console.log(b); // 4


// let arr1 = [1,3,5]
// let arr2 = [7,10,19]
// let arr3 = [11,19,21]

// arr1[0] = 100 // [100 10 19]
// arr2 = arr1 // [100 10 19]


// console.log(arr1); // 100 10 19 
// console.log(arr2); // 100 10 19

// let random = Math.round(Math.random() * 10) // 7
// let number = 5
// let count = 1;
// while (random != number) { // 7 != 5 == false
//     console.log(random);
//     random = Math.round(Math.random() * 10) // 9 9 7 5 
//     count++
// }
// console.log(number + " ededini " + count + " defeye tapdiniz.");



let random = Math.round(Math.random() * 10) // 7 5 9 4 3
let numbers = [5, 9, 3,6,7]
let nextElement = 0; //0 1 2 3
let count = 1; // 3
while (true) {
    if (random == numbers[nextElement]) { 
        console.log(numbers[nextElement] + " ededini " + count + " defeye tapdiniz.");
        nextElement++
        count = 1
    }
    count++
    random = Math.round(Math.random() * 10)
    if (numbers.length == nextElement) {
        break;
    }
}