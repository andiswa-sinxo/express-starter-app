const express = require('express');
const session = require('express-session')
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const pizzaCart = require('./pizza-factory-function')

const app = express();
const pizzaPerfect = pizzaCart()

app.use(session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
}));


// enable the req.body object - to allow us to use HTML forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {
		counter
	});
});
let smallT = 0
let grandT =0;
app.post('/small', function(req, res) {
var qty = ++counter;
var smallpizza = req.body.name
console.log(smallpizza)
if(smallpizza === 'small' ){
	smallT += 35.00
	grandT+= 35.00

}
var price = 35.00 * qty
	res.redirect('/')
});

app.post('/medium', function(req, res) {
	var qty = ++counter;
	var price = 65.00 * qty
	res.render('index', {qty, price})
});

app.post('/large', function(req, res) {
	var qty = ++counter;
	var price = 85.00 * qty
	res.render('index', {qty, price})
});

app.get('/small', function(req, res) {
	var qty = ++counter;
//	var price = 85.00 * qty
	res.render('index', {smallTotal :smallT })
});

app.post('/buy', function(req, res) {
	
})


// start  the server and start listening for HTTP request on the PORT number specified...
let PORT =  process.env.PORT || 3017;

app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});