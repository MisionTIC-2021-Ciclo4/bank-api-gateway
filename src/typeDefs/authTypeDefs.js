const { gql } = require('apollo-server');

const authTypes = gql `
    type Tokens {
        refresh:String!
        access :String!
    }

    type Access {
        access:String!
    }

    input Refresh {
        refresh:String!
    }

    input CredentialsInput {
        username:String!
        password:String!
    }

    input SignUpInput {
        username:String!
        password:String!
        name    :String!
        email   :String!
        balance :Int!
    }

    type UserDetail{
        id      :Int!
        username:String!
        name    :String!
        email   :String!
    }

    input UserUpdate{
        id:Int!
        password:String!
        name:String!
    }

    type Query {
        userDetailById(userId:Int!):UserDetail!
    }

    type Mutation{
        signUpUser(userInput:SignUpInput):Tokens!
        logIn(credentials:CredentialsInput!):Tokens!
        refreshToken(token:Refresh!):Access!
        updateUser(user:UserUpdate!):UserDetail!
        deleteUser(userId:String!):String!
    }
`;
module.exports = authTypes;