const test = require('tape')
const { 'api-maker-dao': mkr } = require('.')

//
// Create a stubbed response object
//
const res = {
  send: (body) => {
    return body
  }
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
  const { err, data } = await mkr(req, res)
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
  const { err, data } = await mkr(req, res)
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
  const { err, data } = await mkr(req, res)
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
  const { err, data } = await mkr(req, res)
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
  const { err, data } = await mkr(req, res)
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
  const { err, data } = await mkr(req, res)
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
  const { err, data } = await mkr(req, res)
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
  const { err, data } = await mkr(req, res)
  t.ok(err)
  t.equal(err, `Method, fail, is not supported.`)
  t.ok(!data)
  t.end()
})
