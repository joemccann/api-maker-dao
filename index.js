const Maker = require('metric-maker-dao')
const maker = new Maker()

const ERR_NO_METHOD = `A method is required: actions || blocks || stats ||` +
` percentage || locked || wrapped`

const METHOD_REGEX = /actions|blocks|stats|percentage|locked|wrapped/

const normalizeMethod = (method) => {
  method = method.toLowerCase()

  if (!METHOD_REGEX.test(method)) {
    return { err: `Method, ${method}, is not supported.` }
  }

  let data = ''

  switch (method) {
    case 'percentage':
      data = 'lockedEtherAsPercentageOfSupply'
      break

    case 'locked':
      data = 'lockedEther'
      break

    case 'wrapped':
      data = 'wrappedEtherAsUSD'
      break

    default:
      data = method
      break
  }
  return { data }
}

exports['api-maker-dao'] = async (req, res) => {
  const {
    body = {},
    query = {}
  } = req

  let historical = body.historical || query.historical || false
  let method = body.method || query.method

  if (!method) return res.status(404).send({ err: ERR_NO_METHOD })

  const { err: normErr, data: normalMethod } = normalizeMethod(method)

  if (normErr) return res.status(404).send({ err: normErr })

  const { err, data } = await maker[normalMethod]({ historical })

  if (err) return res.status(404).send({ err: err.message || err })

  return res.status(200).send({ data })
}
