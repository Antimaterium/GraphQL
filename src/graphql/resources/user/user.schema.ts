const userTypes = `

    # User definition types    
    type User {
        id          : ID!
        name        : String!
        email       : String!
        photo       : String
        createdAt   : String!
        updatedAt   : String!
        posts(first: Int, offset: Int): [Post!]! 
    }

    input UserCreateInput {
        name    : String!
        email   : String!
        password: String!
    }

    input UserUpdateInput {
        name    : String!
        emails  : String!
        photo   : String
    }

    input UserUpdatePasswordInput {
        password : String!
    }
`

const userQueries = `
    users(firts: Int, offset: Int): [ User! ]!
    user(id: ID!): User
`

const userMutations = `
    createUser(input: UserCreateInput!): User
    updateUser(id: ID!, input: UserUpdateInput!): User
    updateUserPassword(id: ID!, input: UserUpdatePasswordInput!): Boolean
    deletUser(id: ID!): Boolean
`

export {
    userTypes,
    userQueries,
    userMutations
}