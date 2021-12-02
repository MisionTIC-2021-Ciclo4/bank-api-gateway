// call all typeDefs
const authTypes        = require("./authTypeDefs")
const accountTypes     = require('./accountTypeDefs')
const transactionTypes = require('./transactionTypeDefs')

const schemaArrays = [authTypes, accountTypes, transactionTypes]
module.exports     = schemaArrays