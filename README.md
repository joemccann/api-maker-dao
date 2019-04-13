# SYNOPSIS

⚒ Opinionated, REST-ful API to access data from MakerDAO via the mkr.tools website.

## REQUIREMENTS

1. A Google Cloud Account.
2. Billing Enabled.
3. API Access Enabled.
4. `gcloud` CLI installed and in your `$PATH`.
5. A preferred configuration created ( `gcloud init` ).

## USAGE

```sh
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-maker-dao?method=stats
```

Or, if you prefer a `POST`:

```sh
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-maker-dao --data '{"method": "stats"}' -H "Content-Type: application/json"
```

The expected response:

```js
{
  "data": {
    "mkrBurned": 730.5022435209961,
    "daiHolders": 20894,
    "mkrHolders": 10683,
    "ethSupply": 105635173.6866
  }
}
```

Or in the case there is a failure:

```js
{
  "err": "Method, boomer, is not supported."
}
```

## API

For all releveant methods, please refer to the [metric-maker-dao](https://github.com/joemccann/metric-maker-dao#api) API docs.

```sh
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-maker-dao?method=stats
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-maker-dao?method=locked
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-maker-dao?method=percentage
curl https://${DEFAULT_REGION}-${PROJECT}.cloudfunctions.net/api-maker-dao?method=percentage&historical=true
```

## DEPLOY

First, fork or clone this repo, then:

```sh
npm i
```

Now, deploy it GCP, run the following command in the root of this repository:

```sh
gcloud functions deploy api-maker-dao --runtime nodejs10 --trigger-http --memory 128MB
```

You should receive a YAML like response in your terminal including the URL for the Cloud Function.

## TESTS

```sh
npm i -D
npm test
```

## AUTHORS

- [Joe McCann](https://twitter.com/joemccann)

## LICENSE

MIT