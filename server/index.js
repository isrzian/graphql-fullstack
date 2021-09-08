const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const users = [
	{id: 1, username: 'Ilya', age: 24},
	{id: 2, username: 'Zhenya', age: 30},
]

const app = express()

app.use(cors())

const createUser = (input) => {
	const id = Date.now()
	return {
		id, ...input
	}
}

const root = {
	getAllUsers: () => {
		return users
	},
	getUser: ({id}) => {
		return users.find(users => users.id === id)
	},
	createUser: ({input}) => {
		const user = createUser(input)
		users.push(user)
		return user
	}
}

app.use('/graphql', graphqlHTTP({
	graphiql: true,
	schema,
	rootValue: root
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server has been started on ${PORT} port`))