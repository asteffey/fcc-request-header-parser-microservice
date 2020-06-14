import whoami from './whoami'

const port = process.env.PORT || 8080

whoami.listen(port, () => {
  console.log(`Listening on ${port}`)
})
