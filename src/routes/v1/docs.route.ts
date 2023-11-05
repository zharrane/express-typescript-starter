import { Router } from 'express'
import SwaggerUi from 'swagger-ui-express'
import { openapiSpecification } from '../../docs/swagger-definition'

const docsRoute = Router()

docsRoute.use('/', SwaggerUi.serve)

docsRoute.get(
  '/',
  SwaggerUi.setup(openapiSpecification, {
    explorer: true,
  })
)

export { docsRoute }
