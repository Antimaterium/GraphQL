import * as Sequelize from "sequelize"
import { BaseModelInterface } from "../interfaces/BaseModelInterface"
import { ModelsInterface } from "../interfaces/ModelsInterface"

export interface CommentAttributes {
    id ?        : number
    comment ?   : string
    post ?      : number
    user ?      : number   
    createdAt ? : string
    updatedAt ? : string
}

export interface CommentInstance extends Sequelize.Instance<CommentAttributes> {}

export interface CommentModel extends BaseModelInterface, Sequelize.Model<CommentInstance, CommentAttributes> {}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): CommentModel => {

    const comment: CommentModel = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'comments'
    })

    comment.associate = (models: ModelsInterface): void => {
        // associando o comment model ao post model
        comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false,
                field: 'post',
                name: 'post'
            }
        })
        //associando o comment model ao user modell
        comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'user',
                name: 'user'
            }
        })
    }

}