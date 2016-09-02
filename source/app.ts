import * as express from 'express'
import { IConfig } from './config'
import Database from './db'
import { UserResource } from './resources/user'

// tslint:disable:no-console

class App {
	private app: express.Application
	private db: Database
	private config: IConfig

	constructor(config: IConfig) {
		this.app = express()
		this.config = config
		this.db = new Database(config)
	}

	start() {
		this.routes()

		this.db.connect().then(() => {
			this.app.listen(this.config.port, () => {
				console.log('Application listening on port ' + this.config.port)
			})
		}, err => {
			console.log(`Failed to load application: ${err}`)
		})
	}

	routes() {
		const user = new UserResource(this.app, this.config)
		user.register('/user')
	}
}

export default App

