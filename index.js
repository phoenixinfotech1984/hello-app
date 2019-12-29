const http = require('http');
const url = require('url')
//create a server object:
const port = process.env.PORT || 5000

const token = "mysecrettoken"

const prefix = 'hello'

http.createServer(function (req, res) {

    //  Get Url and parse it
    //  true parameters for parse query string also
    const parseUrl = url.parse(req.url, true)

    //  GET PATH
    const path = parseUrl.pathname
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')

    //  get the query string as an object
    const queryStringObject = parseUrl.query
    if (trimmedPath === prefix + '/200') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('<h1>Hello World! => Version Stable</h1>'); //write a response
        res.end(); //end the response

    } else if (trimmedPath === prefix + '/token') {

        if (token === queryStringObject.token) {
            res.write('token validated'); //write a response
            res.end(); //end the response
        } else {
            res.writeHead(401)
            res.write('token validation failed'); //write a response
            res.end(); //end the response
        }

    } else if (trimmedPath === prefix + '/500') {
        res.writeHead(500)
        res.write('Some Error Occured\n'); //write a response
        res.end(); //end the response
    } else {
        res.write('not found'); //write a response
        res.end(); //end the response
    }

}).listen(port, function () {
    console.log("server start at port 5000"); //the server object listens on port 3000
});