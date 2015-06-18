var http = require('http'),
fs = require('fs'),
url = require('url'),
mime = require('mime'),
port = process.env.PORT || 3000;

var server = http.createServer(function(req,res) {
  var urlPath = req.url === '/' ? '/index.html' : url.parse(req.url).pathname
  res.setHeader('Content-Type', mime.lookup(urlPath))
  fs.readFile('.' + urlPath, function(err,file) {
    if(err) res.end('404')
    res.end(file)
  })
})

server.listen(port, function() {
  console.log('running on port ' + port)
})
