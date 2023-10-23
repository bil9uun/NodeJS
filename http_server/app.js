const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello Express Server</h1>");
});

app.get("/About", (req, res) => {
  res.status(200).json({
    text: "<h1>Hello. It's About Page</h1>",
    name: "Bilguun",
    age: 22,
    address: {
      district: "Khan-Uul",
      khoroo: 24,
    },
  });
});

app.listen(8008, () => {
  console.log("Server is listening at 8008 port");
});

app.get("/useg", (req, res) => {
  const content = fs.readFile("../OOP/test.txt", { encoding: "utf-8" });
  const count = content.split(" ").length;
  res.send("characterCount:" + count);
});

const users = [
  {
    id: 1,
    name: "Naraa",
    age: 22,
    password: "naraa123",
  },
  {
    id: 2,
    name: "Saraa",
    age: 18,
    password: "saraa123",
  },
  {
    id: 3,
    name: "Navchaa",
    age: 23,
    password: "navchaa123",
  },
  {
    id: 4,
    name: "Tsetsgee",
    age: 45,
    password: "tsetsgee123",
  },
];

app.get("/users", (req, res) => {
  res.json({ message: "All users", users });
});
app.post("/users", (req, res) => {
  res.json();
});

// JSON.parse(); //JSON TO OBJECT
// JSON.stringify(); //OBJECT TO JSON
