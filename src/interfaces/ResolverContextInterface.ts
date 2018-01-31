import {DbConnection} from "./DbConnectionInterface"
import {AuthUser} from "./AuthUserInterface"

export interface ResolverContext {

    db?:            DbConnection
    user?:          AuthUser    
    authorization?: string

}