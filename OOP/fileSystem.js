const { count } = require("console");
const fs = require("fs");

console.log("Start");

// fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   //   console.log(data.split());
//   console.log(data.length);

//   console.log(data.split(" ").length);
// });

// const arr = [
//   {
//     name: "Schoko",
//     price: 1000,
//   },
//   {
//     name: "Milk",
//     price: 100000,
//   },
//   {
//     name: "Bread",
//     price: 10000,
//     date: "2023-10-20",
//   },
// ];

// const sum = arr.reduce((prev, curr) => {
//   return prev + curr.price;
// }, 100);
// console.log("SUM: ", sum);

fs.appendFile("test.txt", { encoding: "utf-8" }, "Hi", (data) => {
  fs.readFile("test.txt", { encoding: "utf-8" });
});

console.log("End");
