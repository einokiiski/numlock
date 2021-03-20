'use strict'

const express = require('express')

const PORT = 8080
const HOST = '0.0.0.0'
const app = express()
const parser = require('body-parser')
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.post('/test', (req, res) => {
    if (req.body.numbers === '1234') {
        res.status(200).send(JSON.stringify({message: 'correct'}))
    } else {
        res.status(200).send(JSON.stringify({message: 'incorrect'}))
    }
})

app.listen(PORT, HOST)