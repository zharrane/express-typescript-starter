import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express typescript starter',
      version: '1.0.0',
    },
  },
  // Path to the API docs
  // Note that this path is relative to the current directory from which the Node.js is ran, not the application itself.
  apis: ['./src/routes/*.ts', './swagger-spec.json'],
}

export const openapiSpecification = swaggerJsdoc(options)
