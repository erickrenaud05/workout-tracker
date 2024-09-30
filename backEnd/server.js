const express = require('express');
const connectDB = require('./config/connection');
const path = require('path');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

const PORT =  process.env.PORT || 3001;

const startApolloServer = async () => {
    await server.start();
    
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
  
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
        
        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, '../frontEnd/dist/index.html'));
        });
      }

      app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware
      }));

    
    connectDB();
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
};

  
startApolloServer();