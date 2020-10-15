# @aquaron/time

![CodeQL](https://github.com/aquaron/time/workflows/CodeQL/badge.svg)
![Tests](https://github.com/aquaron/time/workflows/Tests/badge.svg)

Time utilities

## Usage

Function | Return
--- | ---
`isUpcoming('2020-03-17')` | `false`
`timeLeft(1000)` | Object containing `{... seconds: 1}`
`nextDow(6)` | `Date` object of next Saturday
`toDate('2020-03-17')` | `Date` object
`toYMD(new Date())` | Today's date in `YYYY-MM-DD`
`toPrettyDate('2020-03-17')` | `Tuesday, Mar 30, 2020, 12 AM`

