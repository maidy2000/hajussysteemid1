const app = require('express')();
const PORT = 8080;

app.get('/', (req, res) => {
    const decodedUrl = decodeURI(req.url)
    res.status(200).send(decodedUrl)
    // res.status(200).send(req.path.toString().concat(req.query))
})

app.post('/', (req, res) => {
    const data = getData(req);
    res.end(data)
})

async function getData(req) {
    const buffers = [];

    for (const chunk of req) {
        buffers.push(chunk);
        console.log(chunk)
        console.log(buffers)
    }

    const data = Buffer.concat(buffers).toString();
    return data;
}

app.listen(
    PORT,
    () => console.log(`elab http://localhost:${PORT}`)
);