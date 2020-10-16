# @aquaron/time

[![codeql]][scanning] [![tests]][issues] [![npm]][npmjs]

Collection of date/time related utilities.

## Usage

Function | Return
--- | ---
`isUpcoming('2020-03-17')` | `false`
`timeLeft(1000)` | Object containing `{... seconds: 1}`
`timeLeftStr(1000)` | `1 second`
`nextDow(6)` | `Date` object of next Saturday
`toDate('2020-03-17')` | `Date` object
`toYMD(new Date())` | Today's date in `YYYY-MM-DD`
`toPrettyDate('2020-03-17')` | `Tuesday, Mar 30, 2020, 12:00 AM`

[codeql]: https://github.com/aquaron/time/workflows/CodeQL/badge.svg
[tests]: https://github.com/aquaron/time/workflows/Tests/badge.svg
[npm]: https://github.com/aquaron/time/workflows/Node.js%20Package/badge.svg

[scanning]: https://github.com/aquaron/time/security/code-scanning
[issues]: https://github.com/aquaron/time/issues
[npmjs]: https://www.npmjs.com/package/@aquaron/time
