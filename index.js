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
      res.end('About Me: My name is Nebiyat. I study web development and I like play video games.');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 3000);
