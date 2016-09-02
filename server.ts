import App from './source/app'
import { getConfig, IConfig } from './source/config'

getConfig().then((config: IConfig) => {
	let app = new App(config)
	app.start()
})

