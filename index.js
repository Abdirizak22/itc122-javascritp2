const express = require("express");
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars"); 

const movies = require('./data');
const app = express();

var allMovies = movies.getAll();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set('view engine', 'handlebars');

// render this template for requests to your default route
app.get('/', (req, res) => {
  res.type('text/html');
  res.render('home', {movies:allMovies});
 });

// renders a detail.handlebars template to
 app.get('/detail', (req, res) => {
  const movietitle = req.query.title
  res.render('detail', {title: movietitle, stats:movies.getDetail(movietitle)}); });

  //res.render('detail', {title: movietitle, stats: movies.getDetail(movietitle)});


 
 // send plain text response
 app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About Me: My name is abdirizak. I study web development and I like play video games.');
 });

 // define 404 handler
app.use( (req,res) => {
  res.type('text/plain'); 
  res.status(404);
  res.send('404 - Not found');
 });

 app.listen(app.get('port'), () => {
  console.log('Express started'); 
 });

 