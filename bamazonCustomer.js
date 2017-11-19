const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "2341",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
});


var inventory = []


function printInventory() {
  var query = "SELECT * from products where stock_quantity>0";
  connection.query(query, function(err, res) {
    inventory =[]
    for (var i = 0; i < res.length; i++) {
      var item = "Department Name: " + res[i].department_name +
             " || Product Name : " + res[i].product_name +
             " || Price: " + res[i].price +
             " || quantity: " + res[i].stock_quantity
      console.log( item );

      inventory.push(res[i].product_name);
    }
  console.log("--------------------------------------------------------------------------")
  console.log("--------------------------------------------------------------------------")

    purchase();
  });
}




function purchase() {
  inquirer
    .prompt([
    {
      name: "item",
      type: "list",
      message: "What would you like to buy?",
      choices: inventory
    },
      {
        name: "quantity",
        type: "input",
        message: "How many items would you like to purchase? ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }])
    .then(function(answer) {
  console.log("--------------------------------------------------------------------------")
  console.log("--------------------------------------------------------------------------")

      var query = "SELECT stock_quantity FROM products WHERE product_name = ?";
      connection.query(query, answer.item, function(err, res) {
        if (res[0].stock_quantity<answer.quantity) {
          console.log("There is not enough items for you to purchase")
         restart();
        } else {
         var updateQuery = "update bamazon.products set stock_quantity = ? WHERE product_name = ?";
         var newQuantity = parseInt(res[0].stock_quantity) - parseInt(answer.quantity)
         connection.query(updateQuery, [newQuantity,answer.item], function(err, res) {
          console.log("Congratulations, your order is complete")
          restart();
         });
        }
      });
    });
}

function restart() {
  console.log("--------------------------------------------------------------------------")
  console.log("--------------------------------------------------------------------------")

  inquirer
    .prompt({
      name: "continue",
      type: "confirm",
      message: "Would you like to purchase a new item?"
    })
    .then(function(answer) {
      if (answer.continue) {
        printInventory();
      } else {
         console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
        console.log("Thank you for shopping at Bamazon")
        console.log("          Goodbye...             ")
         console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
        process.exit()
      }
    });
}

  console.log("--------------------------------------------------------------------------")
  console.log("--------------------------------------------------------------------------")
  console.log("                          Welcome to Bamazon.                             ")
  console.log("--------------------------------------------------------------------------")
  console.log("--------------------------------------------------------------------------")
  console.log("-------------------     Here is our inventory:       ---------------------")
  console.log("--------------------------------------------------------------------------")
  console.log("--------------------------------------------------------------------------")
  printInventory();
