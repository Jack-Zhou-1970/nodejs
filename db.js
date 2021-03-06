var mysql = require("mysql");

var sql = {
  insert:
    "insert into product(id, product_name, product_content,product_catalog,link_pic) values(0,?,?,?,?);",
  update:
    "update product set product_name=?, product_content=?,product_catalog=?,link_pic=? where id=?;",
  delete: "delete from product where id=?;",
  queryById: "select * from product where id=?;",
  queryAll: "select * from product;",
  deleteAll: "delete from product;"
};

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "skynocean",
  port: 3306
});

//connect database
db.connect();
console.log("db connected!!");

//database structure: id,product_name,product_catalog,link_pic,product_content
module.exports = {
  add: function(
    peoduct_name,
    product_content,
    product_catalog,
    link_pic,
    callback
  ) {
    //begin to query
    //insert into product(id, peoduct_name, product_content,product_catalog,link_pic) values(0,?,?,?,?);",

    db.query(
      sql.insert,
      [peoduct_name, product_content, product_catalog, link_pic],
      function(err, result) {
        if (!err) {
          console.log("add success!");
        } else {
          console.log("add fail!");
        }

        callback(err, result);
      }
    );
    //connect database
  },
  delete: function(id, callback) {
    //delete: "delete from product where id=?;",
    //begin to query
    db.query(sql.delete, [id], function(err, result) {
      if (!err) {
        console.log("delete success!");
      } else {
        console.log("delete fail!");
      }

      callback(err, result);
    });
  },
  update: function(
    peoduct_name,
    product_content,
    product_catalog,
    link_pic,
    id,
    callback
  ) {
    //  "update product set product_name=?, product_content=?,product_catalog=?,link_pic =? where id=?;",
    //begin to query
    db.query(
      sql.update,
      [peoduct_name, product_content, product_catalog, link_pic, id],
      function(err, result) {
        if (!err) {
          console.log("update success!");
        } else {
          console.log("update fail!");
        }

        callback(err, result);
      }
    );
  },
  queryById: function(id, callback) {
    //select * from product where id=?;,
    //begin to query
    db.query(sql.queryById, [id], function(err, result) {
      if (!err) {
        console.log("queryById success!");
      } else {
        console.log("queryById fail!");
      }

      callback(err, result);
    });
  },
  queryAll: function(callback) {
    //sselect * from product;,
    //begin to query
    db.query(sql.queryAll, function(err, result) {
      if (!err) {
        console.log("queryAll success!");
      } else {
        console.log("queryAll fail!");
      }

      callback(err, result);
    });
  },
  deleteAll: function(callback) {
    //delete * from product;,
    //begin to query
    db.query(sql.deleteAll, function(err, result) {
      var return_data;
      if (!err) {
        console.log("deleteAll success!");
      } else {
        console.log("deleteAll fail!");
      }

      callback(err, result);
    });
  },

  query_type: sql,
  db_conection: db
};
