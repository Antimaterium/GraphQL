import { userQueries } from './resources/users/user.schema'

const Query = `
    type Query {
        ${userQueries}
    }
`

export {
    Query
}