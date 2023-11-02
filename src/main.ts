import Express from 'express'

const app = Express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Started')
})
