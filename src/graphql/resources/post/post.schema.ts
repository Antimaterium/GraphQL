const postTypes = `

    type User {
        id          : ID!
        title       : String!
        content     : String!
        photo       : String
        createdAt   : String!
        updatedAt   : String!
        author      : User!
        comments    : [Comment!]! 
    }

    input PostCreateInput {
        title   : String!
        content : String!
        photo   : String!
        author  : Int!
    }

`

const postQueries = `
    posts(firts: int, offset: int): [ Post! ]!
    post(id: ID!): Post
`

const postMutations = `
    createPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    deletPost(id: ID!): Boolean
`

export {
    postTypes,
    postQueries,
    postMutations
}