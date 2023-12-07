const express = require("express");
require("./config/dbConnection");
const userRoute = require("./routes/route")

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", async (req, res) => {
//     try {
//       const query = await client.query("DROP TABLE users");
//       console.log(query);
//       res.send(query);
//     } catch (error) {
//       console.log(error);
//       res.send(error);
//     }
//   });

//   app.get("/createTable", async (req, res) => {
//     try {    
//       const query = `CREATE TABLE "users" (
//           "id" SERIAL,
//           "name" VARCHAR(50) NOT NULL,
//           "surname" VARCHAR(50) NOT NULL,
//           "email" VARCHAR(100),
//           "password" VARCHAR(100),
//           PRIMARY KEY ("id")
//       );`
//       const sql = await client.query(query);
//       console.log(sql);
//       res.send(query);
//     } catch (error) {
//       console.log(error);
//       res.send(error);
//     }
//   });
app.use("/api",userRoute)

app.listen(8080, () => {
  console.log("server is running on 8080");
});
