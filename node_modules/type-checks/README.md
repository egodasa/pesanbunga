[![Build Status](https://travis-ci.org/marvinhagemeister/type-checks.svg?branch=master)](https://travis-ci.org/marvinhagemeister/type-checks)

# Simple type checks

This is a minimal helper library for type checking in JavaScript. In most
cases you will **NOT** need it. The only case where this comes handy when
you have to do a lot of type checking in your code. In these cases writing
multiple `typeof myvalue === 'whatever'` can become quite noisy.

## API

| function | Check if |
|---|---|
| `isUndef`| ...value is `undefined` |
| `isNull`| ...value is `null` |
| `isNullOrUndef`| ...value is `undefined` or `null` |
| `isString`| ...value is a `string` |
| `isNumber`| ...value is a `number`, excluding `NaN` |
| `isBool`| ...value is a `boolean` |
| `isDate`| ...value is a `Date`-object |
| `isFormatDate`| ...value has the format `YYYY-MM-DD` |
| `isFormatDateTime`| ...value has the format `YYYY-MM-DD hh:mm:ss` |
| `isFormatDateUTC`| ...value has the format `YYYY-MM-DDThh:mm:ssZ` |
| `isObject`| ...value is an `Object` (_Note:_ Arrays are objects too) |
| `isEmpty`| ...value is `""`, `{}`, `[]`, `undefined` or `null` |

## LICENSE

See `LICENSE.md`

