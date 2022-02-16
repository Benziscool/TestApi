const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())


app.get('/posts',(req, res) => {
    res.json(posts)

})

app.post('/login', (req, res) => {
    //Authenticate user
    const username = req.body.username
    const user = {name: username}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
})

app.get('/jwt', (req, res) => {
    //Authenticate user
    const username = req.body.username
    const user = {
        "merchantID": "JT01",
        "invoiceNo": "1523953661",
        "description": "item 1",
        "amount": 1000.00,
        "currencyCode": "SGD",
        "paymentChannel": ["CC"] //Specify which payment option
    }
    const accessToken = jwt.sign(user, 'CD229682D3297390B9F66FF4020B758F4A5E625AF4992E5D75D311D6458B38E2')
    res.status(200).send(accessToken)
})

app.listen(3000)