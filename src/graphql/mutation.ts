import { userMutations } from './resources/users/user.schema'


const Mutation = `
    type Mutation {
        ${userMutations}
    }
`

export {
    Mutation
}