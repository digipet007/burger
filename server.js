//Node dependencies
const express = require("express");
var bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

// override with '_method' header in the HTTP form request. Header here must match name in form.
app.use(methodOverride("_method"));

//Handlebars Stuff
var exphbs = require("express-handlebars");
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/routes");
app.use("/", routes);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
