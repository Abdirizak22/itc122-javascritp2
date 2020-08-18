
//==============THIS IS  Week 2 ASSIGNMENT - Intro to Express==============


const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars"); 

//const movies = require('../data');
const app = express();
// cons
const movies = require('./models/movies');
//const http = require("http");
//const movies = require('../data.js');
//const express = require("express");
//const bodyParser = require("body-parser")
//const exphbs = require("express-handlebars"); 
//try

//var allMovies = movies.getAll();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set('view engine', 'handlebars');
//console
app.get('/', (req, res) => {
  res.type('text/html')
  Movie.find({}).lean()
  .then((movies) => {
   // console.log(movies);
   res.render('home', {movies: allmovies})
  })
 .catch(err => console.log(err));
 });
app.get('/api/movies', (request, response) => {
  return Movie.find({}).lean()
  .then((movies) => {
   // console.log(movies);
   // response.send(movies)
  })
 .catch(err => console.log(err));
 // response.render('home', {movies: all});
});

app.get('/detail', (request, response) => {
  let title= request.query.title;
  //let movie=movies.getmovie(title)
  Movie.findOne({"title":title}).lean()
.then((movie) => {
  response.render('detail', {movie: movie})
 });
});
app.get('/api/delete', (request, response) => {
  let title = request.query.title;
Movie.deleteOne({"title":title}).lean()
.then((movie) => {
  response.json(movie)
  //console.log(movie);;
  response.render('delete', {movie: movie}) 
})
.catch(err => console.log(err));
});

// render this template for requests to your default route
//app.get('/', (req, res) => {
 //res.type('text/html');
  //res.render('home', {movies:allMovies});
// });

// renders a detail.handlebars template to
// app.get('/detail', (req, res) => {
  //const movietitle = req.query.title
  //res.render('detail', {title: movietitle, stats:movies.getDetail(movietitle)}); });

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

 
var http = require("http");
const movie = require('./data');
var allMovies = movie.getAll();

http.createServer(function(req,res){
  var path = req.url.toLowerCase();
  switch(path) {
    case '/': 
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Home Page.' + 'the movies array has: ' + allMovies.length + ' movies');
    break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About Me: My name is abdirizak. I study web development and I like play video games.');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 8080);


  
  //============================ I have comment out the Week 2 ASSIGNMENT, uncomment the code to run the codes============================
