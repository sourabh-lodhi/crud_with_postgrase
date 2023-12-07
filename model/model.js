app.get("/", async (req, res) => {
    try {
      const query = await client.query("CREATE DATABASE crud_postgres");
      console.log(query);
      res.send(query);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  });
  
  app.get("/createTable", async (req, res) => {
    try {    
      const query = `CREATE TABLE "users" (
          "id" SERIAL,
          "name" VARCHAR(50) NOT NULL,
          "surname" VARCHAR(50) NOT NULL,
          "email" VARCHAR(100),
          "password" VARCHAR(100)
          PRIMARY KEY ("id")
      );`
      const sql = await client.query(query);
      console.log(sql);
      res.send(query);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  });