var express = require("express");
var bodyParser = require("body-parser");

// mongoose.Promise = Promise;

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// mongoose.connect("mongodb://localhost/myscraperdb2");
// var db = mongoose.connection;
// db.on('error', function(error) {
//     console.log("Mongoose Error: ", error);
// });
// db.once('open', function() {
//     console.log("Mongoose connection successful.")
// });

// require("./routes/api-routes.js")(app);

var port = process.env.PORT || 3000;
app.listen(port);

