const bodyParser = require('body-parser')
var cors = require('cors')

module.exports = async (app) => {

    app.use(bodyParser.json())
    // app.use(cors())

    app.get('/', async (req, res) => {
        res.send({ hello: 'world' })
    })
}