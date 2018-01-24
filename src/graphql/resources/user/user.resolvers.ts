import { GraphQLResolveInfo } from "graphql"
import { Transaction } from "sequelize"

import { DbConnection } from "../../../interfaces/DbConnectionInterface"
import { UserInstance } from "../../../models/UserModel"
import { handleError } from "../../../utils/utils"

export const userResolvers = {

    User: {
        posts: (user, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.Post
                .findAll({
                    where: {author: user.get('id')},
                    limit: first,
                    offset: offset
                })
                .catch(handleError)
        }
    },

    Query: {
        users: (parent, {first = 10, offset = 0}, {db} : {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.User.findAll({
                limit: first,
                offset: offset
            })
            .catch(handleError)
        },
        user: (parent, {id}, {db} : {db: DbConnection}, info: GraphQLResolveInfo) => {
            id = parseInt(id)
            return db.User
                .findById(id)
                .then((user: UserInstance) => {
                    if(!user) throw new Error(`Usuário com o id ${id} não existe`)
                    return user
                })
                .catch(handleError)
        }
    },

    Mutation: {

        createUser: (parent, {input}, {db} : {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
                return db.User.create(input, {transaction: t})  
            })
            .catch(handleError)
        },
        updateUser: (parent, {input, id}, {db} : {db: DbConnection}, info: GraphQLResolveInfo) => {
            id = parseInt(id)
            return db.sequelize.transaction((t: Transaction) => {
                return db.User
                    .findById(id)
                    .then((user: UserInstance) => {
                        if(!user) throw new Error(`Usuário com o id ${id} não existe`)
                        return user.update(input, {transaction: t})
                    })
            })
            .catch(handleError)
        },
        updateUserPassword: (parent, {input, id}, {db} : {db: DbConnection}, info: GraphQLResolveInfo) => {
            id = parseInt(id)
            return db.sequelize.transaction((t: Transaction) => {
                return db.User
                    .findById(id)
                    .then((user: UserInstance) => {
                        if(!user) throw new Error(`Usuário com o id ${id} não existe`)
                        return user
                            .update(input, {transaction: t})
                            .then((user: UserInstance) => user)
                    })
                    .catch(handleError)
            })
        },
        deleteUser: (parent, {id}, {db} : {db: DbConnection}, info: GraphQLResolveInfo) => {
            id = parseInt(id)
            return db.sequelize.transaction((t: Transaction) => {
                return db.User
                    .findById(id)
                    .then((user: UserInstance) => {
                        if(!user) throw new Error(`Usuário com o id ${id} não existe`)
                        return user
                            .destroy({transaction: t})
                            .then(user => user)
                    })
                    .catch(handleError)
            })
        }

    }

}