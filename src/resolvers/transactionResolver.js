const transactionResolver = {
    Query: {
        transactionByUsername: async(_, { username }, { dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(username == usernameToken) 
                return await dataSources.accountAPI.transactionsByUsername(username);
            else
                return null;
        }, 
        transactionById: async(_, { transactionId}, { dataSources, userIdToken} ) => {
            usernameToken       = (await dataSources.authAPI.getUser(userIdToken)).username
            const transaction   = await dataSources.accountAPI.transactionsById( transactionId )
            usernameTransaction = transaction.usernameOrigin
            if(usernameToken == usernameTransaction)
                return transaction;
            else
                return null;
        },
        transactionUsersDestiny: async(_, { username }, { dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(username == usernameToken) 
                return await dataSources.accountAPI.transactionsRecipientsUsernames(username);
            else
                return null;
        }, 
        
    },
    Mutation: {
        createTransaction: async(_, { transaction }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(transaction.usernameOrigin == usernameToken)
                return await dataSources.accountAPI.createTransaction(transaction);
            else
                return null;
        },
        updateTransaction: async(_, { transaction }, { dataSources, userIdToken }) => {
            usernameToken       = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameTransaction = (await dataSources.accountAPI.transactionsById(transaction.id)).usernameOrigin
            if(usernameToken == usernameTransaction)
                return await dataSources.accountAPI.updateTransaction(transaction);
            else
                return null;

        },
        deleteTransaction: async(_, { transactionId }, { dataSources, userIdToken }) => {
            usernameToken       = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameTransaction = (await dataSources.accountAPI.transactionsById(transactionId)).usernameOrigin
            if(usernameToken == usernameTransaction) 
                return await dataSources.accountAPI.deleteTransaction(transactionId);
            else
                return null;
        }
    }
};

module.exports = transactionResolver;