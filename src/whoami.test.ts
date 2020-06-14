import request from 'supertest'
import whoami from './whoami'

describe('whoami api', () => {
  const expected = {
    ipaddress: '::ffff:127.0.0.1',
    language: 'some language',
    software: 'some software'
  }

  it('returns expected response', async () => {
    const { body } = await request(whoami)
      .get('/api/whoami')
      .set('accept-language', expected.language)
      .set('user-agent', expected.software)
    expect(body).toEqual(expected)
  })
})
