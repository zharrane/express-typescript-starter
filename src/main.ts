import Express from 'express'
import { logger } from './config/logger'
import { router } from './routes'
import cors from 'cors'

const app = Express()

const corsOptions = {
  origin: '*',
  // methods:
  // GET,HEAD,PUT,PATCH,POST,DELETE,
  // allowedHeaders:
  //     "Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Origin,Cache-Control,Content-Type,X-Token,X-Refresh-Token ,Content-Range" ,
  exposedHeaders: ['Content-Range'],
  // optionsSuccessStatus: 204
}

app.use(cors(corsOptions))

// parse json request body
app.use(Express.json())

// parse urlencoded request body
app.use(Express.urlencoded({ extended: true }))

app.use('/v1', router)

app.listen(3000, () => {
  logger.info(`Listening to port ${3000}`)
})
