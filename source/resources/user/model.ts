import { model, Schema } from 'mongoose'

export interface IUser {
	name: string,
}

export const UserSchema = new Schema({
	username: String,
	password: String,
	accountId: String,
})

export const User = model('User', UserSchema)

