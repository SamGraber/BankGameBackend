import { Application } from 'express'
import { IConfig } from '../../config'
import { User } from './model'

export class UserResource {
	app: Application
	config: IConfig

	constructor(app: Application, config: IConfig) {
		this.app = app
		this.config = config
	}

	register(path) {
		path = this.config.baseUrl + path

		this.app.get(path, (req, res) => {
			User.find((err, result) => {
				if (err) {
					res.status(500).send({ error: err })
				}
				res.send(result)
			})
		})
	}
}

