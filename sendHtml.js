var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    fs.readFile('index.html',function(error,data){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(data)
        res.end()
    })
    

}).listen(7000)

   