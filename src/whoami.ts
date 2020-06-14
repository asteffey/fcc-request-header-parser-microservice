import cors from 'cors'
import express from 'express'

const whoami = express()

whoami.use(cors({ optionsSuccessStatus: 200 }))

whoami.use(express.static('public'))

whoami.get('/api/whoami', ({ ip, headers }, res) => {
  res.json({
    ipaddress: ip,
    language: headers['accept-language'],
    software: headers['user-agent']
  })
})

export default whoami
