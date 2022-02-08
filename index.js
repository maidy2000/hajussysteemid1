var http = require('http');
var server = http.createServer(async (req, res) => {
    const decodedUrl = decodeURI(req.url);
    if(req.method == 'GET') {
        res.end(decodedUrl);
        return;
    }
    else if (req.method == 'POST') {
        var data = [];
        for await (const chunk of req){
            data.push(chunk);
        };
        var result = Buffer.concat(data).toString();
        res.end(result);
        return;
    }
})

server.listen(8080);
console.log('Server running on port 8080')