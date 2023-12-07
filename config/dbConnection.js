const { Client } = require("pg");
const { promisify } = require("util");

const client = new Client({
  user: "postgres",
  host: "localhost",
  password: "12345678",
  database: "crud_postgres",
  port: 5432,
});

client.query = promisify(client.query).bind(client);
client.connect((error) => {
  if (error) {
    console.log(error);
  }
  console.log("DB connected");
});

module.exports = client;
