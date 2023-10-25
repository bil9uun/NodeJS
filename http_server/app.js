const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const app = express();

const PORT = 8008;

app.use(express.json());

app.get("/api/users", (req, res) => {
  console.log("Get all users");
  res.status(200).json({ message: "Success" });
});
app.post("/api/users", (req, res) => {
  console.log("Create new user");
  const newUser = { id: uuidv4(), ...req.body };

  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );

  users.push(newUser);

  fs.writeFileSync("users.json", JSON.stringify({ users }), {
    encoding: "utf-8",
  });

  res.status(201).json({ message: "Success" });
});
app.put("/api/users/:id", (req, res) => {
  console.log("Hello Put Method");
  res.status(200).json({ message: "Success" });
});
app.delete("/api/users/:userId", (req, res) => {
  console.log("Hello Delete Method");
  const { userId } = req.params;
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  const index = users.findIndex((el) => el.id === userId);
  if (index < 0) {
    res.status(404).json({ message: `${userId}-tai hereglegch oldsongui` });
  } else {
    users.splice(index, 1);
    fs.writeFileSync("users.json", JSON.stringify({ users }), {
      encoding: "utf-8",
    });
    res.status(200).json({ message: `${userId}-tai hereglegch ustgagdlaa` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${8008} port`);
});

// app.get("/About", (req, res) => {
//   res.status(200).json({
//     text: "<h1>Hello. It's About Page</h1>",
//     name: "Bilguun",
//     age: 22,
//     address: {
//       district: "Khan-Uul",
//       khoroo: 24,
//     },
//   });
// });

// app.get("/useg", (req, res) => {
//   const content = fs.readFile("../OOP/test.txt", { encoding: "utf-8" });
//   const count = content.split(" ").length;
//   res.send("characterCount:" + count);
// });

// const users = [
//   {
//     id: 1,
//     name: "Naraa",
//     age: 22,
//     password: "naraa123",
//   },
//   {
//     id: 2,
//     name: "Saraa",
//     age: 18,
//     password: "saraa123",
//   },
//   {
//     id: 3,
//     name: "Navchaa",
//     age: 23,
//     password: "navchaa123",
//   },
//   {
//     id: 4,
//     name: "Tsetsgee",
//     age: 45,
//     password: "tsetsgee123",
//   },
// ];

// app.get("/users", (req, res) => {
//   res.json({ message: "All users", users });
// });
// app.post("/users", (req, res) => {
//   res.json();
// });

// JSON.parse(); //JSON TO OBJECT
// JSON.stringify(); //JSON TO STRING
