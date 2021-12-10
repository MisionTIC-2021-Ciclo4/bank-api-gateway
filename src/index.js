/*
#    src/index.js is part of "Demo MisionTIC-2021 C4 - APIGateway", 
#    created by Carlos Andrés Sierra.
#
#    "Demo MisionTIC-2021 C4 - APIGateway" is free software: 
#    you can redistribute it and/or modify it under the terms of the 
#    GNU General Public License as published by the Free Software Foundation, 
#    either version 3 of the License, or (at your option) any later version.
#
#    "Demo MisionTIC-2021 C4 - APIGateway" is distributed in 
#    the hope that it will be useful, but WITHOUT ANY WARRANTY; 
#    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A 
#    PARTICULAR PURPOSE.  See the GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with "Demo MisionTIC-2021 C4 - APIGateway". 
#    If not, see <https://www.gnu.org/licenses/>.
#
#    For contact, you can write to casierrav@unal.edu.co
*/


const { ApolloServer} = require('apollo-server');

// Get all components created
const typeDefs        = require('./typeDefs');
const resolvers       = require('./resolvers');
const authentication  = require('./utils/authentication');
const AuthAPI         = require('./dataSources/authAPI');
const AccountAPI      = require('./dataSources/accountAPI');


// Create ApolloServer instance
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

// Check listen port 
server.listen( process.env.PORT || 4000 ).then(({url}) => {
        console.log(`Server ready at ${url}`);
    }
);