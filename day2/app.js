// let i1 = 1;
// let i2 = 2;
// let i3 = 3;
// let i4 = 4;
// let i5 = 5;
// let s = "";
// for(let i = 0; i <= 20; i++) {
// s = s + " " + i
// console.log(i);
// 
// let a = Number(prompt("Nhập số a"))
// let b = Number(prompt("Nhập số b"))
// for(let i = a; i <= b; i++){
//     console.log(i)
// }
// let temp = 1;
// let input = Number(prompt("Giai thừa của"))

// for (let i = 1; i <= input; i++) {
//     temp = temp * i
// }

// console.log(temp)

// let person = {
//     name: "marie curie"
// }
// person.name
let computers = [
    {
        laptopName: "ROG",
        price: 100,
    },
    {
        laptopName: "DELL",
        price: 200,
    },

    {
        laptopName: "ASUS",
        price: 300,
    },
];

for(let i = 0; i <= computers.length ;i++){
    if(computers[i].price >= 200){
    console.log(computers[i].laptopName);
}
}
