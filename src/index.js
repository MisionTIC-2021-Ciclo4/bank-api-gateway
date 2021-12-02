const { ApolloServer} = require('apollo-server');

const typeDefs       = require('./typeDefs');
const resolvers      = require('./resolvers');
const authentication = require('./utils/authentication');
const AuthAPI        = require('./dataSources/authAPI');
const AccountAPI     = require('./dataSources/accountAPI');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI   : new AuthAPI(),
        accountAPI: new AccountAPI(),
    }),
    introspection: true,
    playground   : true
});

server.listen( process.env.PORT || 4000 ).then(({url}) => {
        console.log(`Server ready at ${url}`);
    }
);