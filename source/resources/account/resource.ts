import { Application } from 'express'
import { IConfig } from '../../config'
import { Account } from './model'

export class AccountResource {
	app: Application
	config: IConfig

	constructor(app: Application, config: IConfig) {
		this.app = app
		this.config = config
	}

	register(path) {
		path = this.config.baseUrl + path

		this.app.get(path, (req, res) => {
			Account.find((err, result) => {
				if (err) {
					res.status(500).send({ error: err })
				}
				res.send(result)
			})
		})

		this.app.get(path + '/:id', (req, res) => {
			Account.findOne({ _id: req.params.id }, {}, (err, result) => {
				if (err) {
					res.status(500).send({ error: err })
				}
				res.send(result)
			})
		})

		this.app.put(path + '/:id', (req, res) => {
			Account.update({ _id: req.params.id }, req.body, {}, (err, result) => {
				if (err) {
					res.status(500).send({ error: err })
				}
				res.send(result)
			})
		})
	}
}

