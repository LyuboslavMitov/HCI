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
  const {
    username,
    password
  } = req.body

  getData('./mockData/users.json').then(users => {
    const foundUser = users.find(user => user.username === username)

    if (!foundUser || foundUser.password !== password) {
      res.status(401)
        .json({
          message: 'Wrong credentials.'
        })

      return;
    }

    res.status(200).json({
      token: jwt.sign({
        user: foundUser.username,
        id: foundUser.id,
        role: foundUser.role
      }, SECRET)
    })
  })
})

app.get('/users/:id', (req, res) => {
  const {
    id
  } = req.params

  getData('./mockData/users.json').then(users => {
    const foundUser = users.find(u => u.id === id)
    res.json(foundUser)
  })
})

app.put('/users/:id', (req, res) => {
  const {
    id
  } = req.params

  getData('./mockData/users.json').then(data => {
    const {
      body: {
        email,
        username,
        password
      }
    } = req

    const userFound = data.find(user => user.id === id)
    userFound.email = email
    userFound.username = username
    userFound.password = password

    fs.writeFile('./mockData/users.json', JSON.stringify(data), 'utf8', (err) => {
      if (!err) {
        res.json(data)
      }
    });
  })
})

app.get('/tickets', (req, res) => {
  getData('./mockData/tickets.json').then(data => {
    res.json(data)
  })
})


app.post('/tickets', (req, res) => {
  getData('./mockData/tickets.json').then((data) => {
    const {
      body
    } = req
    data.push(body)

    fs.writeFile('./mockData/tickets.json', JSON.stringify(data), 'utf8', (err) => {
      if (!err) {
        res.json(data)
      }
    });
  })
})

app.listen(3000, () => {
  console.log('started');
})
