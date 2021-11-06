// Làm bài tập
// Bài 1
// ý 2: Tìm số lớn nhất trong mảng vừa nhập
// const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];

// let numberMax = arrayNumber[0];
// for(let i = 0; i < arrayNumber.length; i++) {
//     if(arrayNumber[i] >= numberMax) {
//         numberMax = arrayNumber[i];
//     }
// }
// console.log(numberMax)

// // ý 3: Tìm vị trí số nhỏ nhất trong mảng
// let numberMin = arrayNumber[0];
// for (let i = 0; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] <= numberMin) {
//         numberMin = arrayNumber[i];
//     }
// }

// for (let i = 0; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] == numberMin) {
//         console.log(i);
//     }
// }

// Bài 2
// var arrayNumber= [1, 2, 6, 5, 3, 4];
// const array =[];

// for(let i = 1; i <= 6; i++) { 
    
//     let input = prompt("nhập số: ")
//     array.push(parseInt(input)) 
// }

// const arraySort = array.sort((a, b) => a - b)
// console.log(arraySort)

// Bài 3

// const array =[]
// var arraysốNguyênTố =[]

// const A = parseInt(prompt("nhập n:", ""))

// for (let i = 0; i <=A; i++) {
//     array.push(i)
// }

// for ( a in array ) {
//     if ( a > 1 ) {
//         let count = 0
//         for (let i = 1; i <=a; i++) {
//             if (a % i === 0) {
//                 count++
//             }
//         }
//         if (count === 2) {
//         arraysốNguyênTố.push(a)
//         }
//     }
// }
// console.log(arraysốNguyênTố)