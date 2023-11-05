import { Router } from 'express'
import { docsRoute } from './v1/docs.route'

const router = Router()

/**
 * @swagger
 * /:
 *   get:
 *     description: Returns the homepage
 *     responses:
 *       200:
 *         description: hello world
 */
router.get('/', function (req, res) {
  res.send(`Hello World ${__dirname}`)
})

router.use('/docs', docsRoute)

export { router }
