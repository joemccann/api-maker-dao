const test = require('tape')
const { 'api-maker-dao': mkr } = require('.')

//
// Create a mock request and response method
//

function status (code) {
  this.statusCode = code
  return this
}

function send (obj) {
  const body = { ...this, ...obj }
  return body
}

const res = {
  status,
  send
}

test('sanity', t => {
  t.ok(true)
  t.end()
})

test('pass - actions', async t => {
  const req = {
    body: {
      method: 'actions'
    }
  }
  const { err, data, statusCode } = await mkr(req, res)
  t.equals(statusCode, 200)
  t.ok(!err)
  t.ok(data)
  t.end()
})

test('pass - blocks', async t => {
  const req = {
    body: {
      method: 'blocks'
    }
  }
  const { err, data, statusCode } = await mkr(req, res)
  t.equals(statusCode, 200)
  t.ok(!err)
  t.ok(data)
  t.end()
})

test('pass - stats', async t => {
  const req = {
    body: {
      method: 'stats'
    }
  }
  const { err, data, statusCode } = await mkr(req, res)
  t.equals(statusCode, 200)
  t.ok(!err)
  t.ok(data)
  t.end()
})

test('pass - percentage', async t => {
  const req = {
    body: {
      method: 'percentage'
    }
  }
  const { err, data, statusCode } = await mkr(req, res)
  t.equals(statusCode, 200)
  t.ok(!err)
  t.ok(data)
  t.end()
})

test('pass - percentage and historical', async t => {
  const req = {
    body: {
      historical: true,
      method: 'percentage'
    }
  }
  const { err, data, statusCode } = await mkr(req, res)
  t.equals(statusCode, 200)
  t.ok(!err)
  t.ok(data)
  t.end()
})

test('pass - locked', async t => {
  const req = {
    body: {
      method: 'locked'
    }
  }
  const { err, data, statusCode } = await mkr(req, res)
  t.equals(statusCode, 200)
  t.ok(!err)
  t.ok(data)
  t.end()
})

test('pass - percentage', async t => {
  const req = {
    body: {
      method: 'wrapped'
    }
  }
  const { err, data, statusCode } = await mkr(req, res)
  t.equals(statusCode, 200)
  t.ok(!err)
  t.ok(data)
  t.end()
})

test('fail - unsupported method', async t => {
  const req = {
    body: {
      method: 'fail'
    }
  }
  const { err, data, statusCode } = await mkr(req, res)
  t.equals(statusCode, 404)
  t.ok(err)
  t.equal(err, `Method, fail, is not supported.`)
  t.ok(!data)
  t.end()
})
