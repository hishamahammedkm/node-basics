var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req,res){
    var q=url.parse(req.url,true)
    console.log(q.pathname)
    if(q.pathname === '/'){
        fs.readFile('form.html',function(error,data){
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(q.pathname === '/signup'){
        console.log(q.query.name)
        
        res.write('signupppp')
        res.end()
    }
    
    else if(q.pathname ==='/login'){
        res.write('login')
        res.end()

    }
    else if(q.pathname ==='/admin'){
        res.write('admin')
        res.end()

    }
    else{
        res.write('not route')
        res.end()
    }
    

}).listen(7000,()=>console.log('sever is running.....'))

   