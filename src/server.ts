import app from './app'
import config from './config'

async function bootstrap() {
  try {
    app.listen(config.port, () =>
      console.log('Application running on', config.port)
    )
  } catch (error) {
    console.log('Failed to connect db', error)
  }
}

bootstrap()
