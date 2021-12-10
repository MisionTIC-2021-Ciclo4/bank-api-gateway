const { gql } = require('apollo-server');

const transactionTypes = gql `
    type Transaction {
        id             :String!
        usernameOrigin :String!
        usernameDestiny:String!
        value          :Int!
        note           :String!
        date           :String!
    }

    input TransactionInput {
        usernameOrigin :String!
        usernameDestiny:String!
        value          :Int!
        note           :String!
    }

    input TransactionUpdate {
        id  :String!
        note:String!
    }

    extend type Query{
        transactionByUsername(username:String!)  :[Transaction]
        transactionById(transationId:String!)    :Transaction
        transactionUsersDestiny(username:String!):[String]
    }

    extend type Mutation{
        createTransaction(transaction:TransactionInput!) :Transaction
        updateTransaction(transaction:TransactionUpdate!):Transaction
        deleteTransaction(transactionId:String!)          :String!
    }
`;
module.exports = transactionTypes;