import { makeExecutableSchema } from 'graphql-tools'
import { Query } from './query'
import { Mutation } from './mutation'

import { userTypes } from './resources/users/user.schema';
import { postTypes } from './resources/post/post.schema'

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
        postTypes,
        userTypes
    ]
});