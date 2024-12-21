const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/graphql-mvc', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// GraphQL middleware
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000/graphql');
});
