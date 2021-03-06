import { model, Schema } from 'mongoose'

export interface IUser {
	username: string
	password: string
	accountId: string
}

export const UserSchema = new Schema({
	username: String,
	password: String,
	accountId: String,
})

export const User = model('User', UserSchema)

