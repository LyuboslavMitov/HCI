const fs = require('fs');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(cors())

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.get('/api/test', (req, res) => {
    fs.readFile('./mockData/test.json', (err, data) => {
        const parsedData = JSON.parse(data)

        res.json(parsedData)
    })
})

app.post('/api/test', (req, res) => {
    fs.readFile('./mockData/test.json', (err, data) => {
        const { body } = req
        const parsedData = JSON.parse(data)
        parsedData.push(body)

        fs.writeFile('./mockData/test.json', JSON.stringify(parsedData), 'utf8', (err) => {
            if (!err) {
                res.json(parsedData)
            }
        });
    })
})

app.listen(3000, () => {
    console.log('started');
})
