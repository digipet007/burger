const express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphb = require('express-handlebars');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
app.engine('handlebars', exphb({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//include html route file, with express app parameter passed into module.exports function
//NOTE: api routes need to be included first because they pull data to display in html pages
var routes = require("./controllers/routes")(app);
// require("./routing/htmlRoutes")(app);

app.use('/', routes);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})