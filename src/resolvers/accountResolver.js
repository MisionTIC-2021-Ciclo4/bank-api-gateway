const accountResolver = {
    Query: {
        accountByUsername: async(_, {username}, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(username == usernameToken)
                return await dataSources.accountAPI.accountByUsername(username);
            else
                return null;
        }
    },
    Mutation: {
        
    }
};

module.exports = accountResolver;