let mysql = require("mysql");
// ! Conect with MySQL
// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
// });

// !Create Database
// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected");
//   con.query("CREATE DATABASE mydb", (err, result) => {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// !Create Table
// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });
// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql =
//     "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// !Insert Into Table
// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

// con.connect((err) => {
//   if (err) throw err;
//   console.log("Conected!");
//   let sql =
//     "INSERT INTO customers (name, address) VALUES ('Company Youcode', 'Youssoufia')";
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

// !Select From a Table
// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });
// con.connect((err) => {
//   if (err) throw err;
//   console.log("Conected!");
//   let sql1 = "SELECT * FROM customers"; // select all
//   let sql2 = "SELECT name, address FROM customers"; // select name, address
//   con.query(sql2, (err, result, fields) => {
//     if (err) throw err;
//     console.log(result[0].address);
//   });
// });

// !Selecting Columns
// *To select only some of the columns in a table, use the "SELECT" statement followed by the column name.
// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });
// con.connect((err) => {
//   if (err) throw err;
//   console.log("Conected!");
//   let sql = "SELECT name, address FROM customers"; // select name, address
//   con.query(sql, (err, result, fields) => {
//     if (err) throw err;
//     console.log(result[1].address);
//     /*
//       !The Result Object
//       As you can see from the result of the example above, the result object is an array containing each row as an object.
//       To return e.g. the address of the second record, just refer to the second array object's address property:
//       console.log(result[1].address);
//     */
//   });
// });

// !The Fields Object
// *The third parameter of the callback function is an array containing information about each field in the result.
// ?Example: (Select all records from the "customers" table, and display the fields object:)
// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });
// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = "SELECT name FROM customers";
//   con.query(sql, (err, result, fields) => {
//     console.log(fields);
//   });
// });

// !Select With a Filter
// *When selecting records from a table, you can filter the selection by using the "WHERE" statement:
// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = 'SELECT * FROM customers WHERE id = "1"';
//   con.query(sql, (err, result, fields) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// !Update Table
// *You can update existing records in a table by using the "UPDATE" statement:
// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = 'UPDATE customers SET address = "Highway 37" WHERE id = "1"';
//   con.query(sql, (err) => {
//     if (err) throw err;
//     console.log("Updated seccessfully!");
//   });
// });

// !Limit the Result
// *You can limit the number of records returned from the query, by using the "LIMIT" statement:
// ?Example: (Select the 5 first records in the "customers" table:)
// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = "SELECT * FROM customers LIMIT 5";
//   con.query(sql, (err, result) => {
//     console.log(result);
//   });
// });

// !Join Two or More Tables
// *You can combine rows from two or more tables, based on a related column between them, by using a JOIN statement.
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  let sql =
    "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  con.query(sql, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
