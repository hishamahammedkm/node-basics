var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    if(req.url === '/'){
        fs.readFile('index.html',function(error,data){
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(req.url ==='/login'){
        res.write('login')
        res.end()

    }
    else if(req.url ==='/admin'){
        res.write('admin')
        res.end()

    }
    else{
        res.write('not route')
        res.end()
    }
    

}).listen(7000,()=>console.log('sever is running.....'))

   