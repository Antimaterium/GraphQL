import { userQueries } from './resources/users/user.schema'
import { postQueries } from './resources/post/post.schema'

const Query = `
    type Query {
        ${postQueries}
        ${userQueries}
    }
`

export {
    Query
}