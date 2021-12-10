const userResolver = {
    Query: {
        userDetailById: async(_, {userId}, { dataSources, userIdToken }) => {
            if(userId == userIdToken)
                return await dataSources.authAPI.getUser(userId);
            else
                return null;
        },
        userOtherAccounts: async(_, {userId}, { dataSources, userIdToken }) => {
            if(userId == userIdToken)
                return await dataSources.authAPI.getOtherAccounts(userId);
            else
                return null;
        }
    },
    Mutation: {
        signUpUser: async (_, {userInput}, { dataSources }) => {
            const accountInput = {
                username   : userInput.username,
                balance    : userInput.balance,
                lastChange : (new Date()).toISOString()
            }

            const authInput = {
                username : userInput.username,
                password : userInput.password,
                name     : userInput.name,
                email    : userInput.email 
            }
            const userResponse = await dataSources.authAPI.createUser(authInput);
            if(userResponse.hasOwnProperty('refresh') && userResponse.hasOwnProperty('access'))
                await dataSources.accountAPI.createAccount(accountInput);
            return userResponse;
        },
        logIn: async(_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.authRequest(credentials);
        },
        refreshToken: async(_, { token }, { dataSources }) => {
            return await dataSources.authAPI.refreshToken(token);
        },
        updateUser:async(_, { user }, { dataSources, userIdToken }) => {
            if(user.id == userIdToken)
                return await dataSources.authAPI.updateUser(user);
            else
                return null;
        },
        deleteUser:async(_, { userId }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) 
                return await dataSources.authAPI.deleteUser(userId);
            else
                return null;
        }
    }
};

module.exports = userResolver;