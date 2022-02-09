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

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});