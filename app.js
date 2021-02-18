const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "postgres",
  port: 5432,
  host: "172.18.0.2",
  database: "twitter",
});

client
  .connect()
  .then(() => {
    console.log("Connected successfully!");
  })
  .then(() => {
    return client.query("SELECT * FROM public.dummy_table");
  })
  .then((content) => {
    console.table(content.rows);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    client.end();
  });
