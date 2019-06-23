const fs = require('fs');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const jwt = require('jsonwebtoken')

const SECRET = 'secret'

//helpers
const getData = (fileName) => {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, (err, data) => {
      err ? reject(err) : resolve(JSON.parse(data));
    });
  });
}


const app = express();


app.use(cors())

app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());

app.post('/auth/login', (req, res) => {
    const { username, password } = req.body

    getData('./mockData/users.json').then(users => {
        const foundUser = users.find(user => user.username === username)
        
        if (!foundUser || foundUser.password !== password) {
            res.status(401)
                .json({message: 'Wrong credentials.'})

            return;
        }

        res.status(200).json({
            token: jwt.sign({ user: foundUser.username, id: foundUser.id }, SECRET)
        })
    })
})

app.get('/api/test', (req, res) => {
  getData('./mockData/test.json').then(data => {
    res.json(data)
  })
})

app.post('/api/test', (req, res) => {
  getData('./mockData/test.json').then((data) => {
    const {
      body
    } = req
    data.push(body)

    fs.writeFile('./mockData/test.json', JSON.stringify(data), 'utf8', (err) => {
      if (!err) {
        res.json(data)
      }
    });
  })
})

app.listen(3000, () => {
  console.log('started');
})
