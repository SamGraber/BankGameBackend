import { model, Schema } from 'mongoose'

export interface IAccount {
	_id: string
	balance: number
}

export const AccountSchema = new Schema({
	_id: String,
	balance: Number,
})

export const Account = model('Account', AccountSchema)

