import { userMutations } from './resources/users/user.schema'
import { postMutations } from './resources/post/post.schema'
import { commentMutations } from './resources/comment/comment.schema'

const Mutation = `
    type Mutation {
        ${commentMutations}        
        ${postMutations}
        ${userMutations}
    }
`

export {
    Mutation
}