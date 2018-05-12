const express = require("express")
const graphqlHTTP = require('express-graphql')
const app = express()

const schema = require('./schema')

const PORT = 8080

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))