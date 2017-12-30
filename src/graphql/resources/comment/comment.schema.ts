const commentTypes = `

    type Comment {
        id          : ID!
        comment     : String!
        createdAt   : String!
        updatedAt   : String!
        user        : User!
        post        : Post! 
    }

    input CommentInput {
        comment : String!
        post    : Int!
        iser    : Int!
    }

`

const commentQueries = `
    commentsByPost(post: ID!, firts: int, offset: int): [ Comment! ]!
    post(id: ID!): Post
`

const commentMutations = `
    createComment(input: CommentInput!): Comment
    updateComment(id: ID!, input: CommentInput!): Comment
    deleteCommment(id: ID!): Boolean
`

export {
    commentTypes,
    commentQueries,
    commentMutations
}