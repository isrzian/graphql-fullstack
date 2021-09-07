const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
	graphiql: true,
	schema
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server has been started on ${PORT} port`))