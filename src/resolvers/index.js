const authResolver        = require('./authResolver')
const accountResolver     = require('./accountResolver')
const transactionResolver = require('./transactionResolver')
const lodash              = require('lodash')

const resolvers = lodash.merge(authResolver, accountResolver, transactionResolver);
module.exports = resolvers;