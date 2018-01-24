import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'
import { Query } from './query'
import { Mutation } from './mutation'

import { commentTypes } from './resources/comment/comment.schema'
import { userTypes } from './resources/user/user.schema'
import { postTypes } from './resources/post/post.schema'
import { tokenTypes } from './resources/token/token.schema'

import { commentResolvers } from './resources/comment/comment.resolvers'
import { postResolvers } from './resources/post/post.resolvers'
import { tokenResolvers } from './resources/token/token.resolver'
import { userResolvers } from './resources/user/user.resolvers'

const resolvers = merge(
    commentResolvers,
    postResolvers,
    tokenResolvers,
    userResolvers
)

const schemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`

export default makeExecutableSchema({
    typeDefs: [
        schemaDefinition,
        Query,
        Mutation,
        commentTypes,
        postTypes,
        userTypes,
        tokenTypes
    ],
    resolvers
});