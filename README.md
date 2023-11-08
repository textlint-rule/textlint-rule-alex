# textlint-rule-alex [![Actions Status: test](https://github.com/textlint-rule/textlint-rule-alex/workflows/test/badge.svg)](https://github.com/textlint-rule/textlint-rule-alex/actions?query=workflow%3A"test")

[textlint](https://github.com/textlint/textlint "textlint") rule for [ALEX](http://alexjs.com/ "ALEX").

> Whether your own or someone else’s writing, alex helps you find gender favouring, polarising, race related, religion inconsiderate, or other unequal phrasing.
> -- [wooorm/alex: Catch insensitive, inconsiderate writing](https://github.com/wooorm/alex#alexvalue-allow "wooorm/alex: Catch insensitive, inconsiderate writing")

## Installation

    npm install textlint-rule-alex

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "alex": {
            "allow": []
        }
    }
}
```

Via CLI

```sh
$ textlint --rule alex README.md
```

## Options

See [Alex's configuration documentation](https://github.com/get-alex/alex#configuration).

### `allow`

```json
{
    "rules": {
        "alex": {
             "allow": ["boogeyman-boogeywoman"]
        }
    }
}
```

### `deny`

```json
{
    "rules": {
        "alex": {
             "deny": ["boogeyman-boogeywoman"]
        }
    }
}
```

### `noBinary`

```json
{
    "rules": {
        "alex": {
             "noBinary": true
        }
    }
}
```

### `profanitySureness`

```json
{
    "rules": {
        "alex": {
             "profanitySureness": 2
        }
    }
}
```

## Tests

    corepack enable npm
    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT