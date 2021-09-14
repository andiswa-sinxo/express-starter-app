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

let smallCounter = 0;
let mediumCounter = 0;
let largeCounter = 0;
let grandTotal 

// let smallT = 0
app.get('/', function(req, res) {

	res.render('index') 
		
});

app.post('/small', function(req, res) {
	var totalPrice = pizzaPerfect.totalPizza()
	var smallQty = ++smallCounter;
	var smallTotal = 35.00 * smallQty
	var totalPrice = smallTotal
	res.render('index', {smallQty, smallTotal, totalPrice})
});
app.post('/medium', function(req, res) {
	// console.log(req.body.mediumPizza)
	// var medium = req.body.mediumPizza
	var mediumQty = ++mediumCounter;
	var mediumTotal = 65.00 * mediumQty
	var totalPrice = mediumTotal
	res.render('index', {mediumQty, mediumTotal,totalPrice})
});

app.post('/large', function(req, res) {
	var largeQty = ++largeCounter;
	var largeTotal = 85.00 * largeQty
	var totalPrice = largeTotal
	res.render('index', {largeQty, largeTotal, totalPrice})
});

// app.get('/small', function(req, res) {
// 	// var qty = ++counter;
// 	// var price = 35.00 * qty
// 	res.render('index', {smallTotal : smallT })
// });

app.post('/buy', function(req, res) {
	
})


// start  the server and start listening for HTTP request on the PORT number specified...
let PORT =  process.env.PORT || 3017;

app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});