# @aquaron/time [![codeql]][scanning] [![tests]][issues] [![npmjs]][package] ![badge-time]

Collection of date/time related utilities.

## Usage

Function | Return
--- | ---
`isUpcoming('2020-03-17')` | `false`
`timeLeft(1000)` | Object containing `{... seconds: 1}`
`timeLeftStr(1000)` | `1 second`
`nextDow(6)` | `Date` object of next Saturday
`prevDow(3)` | `Date` object of prev Wednesday
`toDate('2020-03-17')` | `Date` object
`toYMD(new Date())` | Today's date in `YYYY-MM-DD`
`toPrettyDate('2020-03-17')` | `Tuesday, Mar 30, 2020, 12:00 AM`

[codeql]: https://github.com/aquaron/time/workflows/codeql/badge.svg
[tests]: https://github.com/aquaron/time/workflows/tests/badge.svg
[npmjs]: https://github.com/aquaron/time/workflows/npmjs/badge.svg

[scanning]: https://github.com/aquaron/time/security/code-scanning
[issues]: https://github.com/aquaron/time/issues
[package]: https://www.npmjs.com/package/@aquaron/time
[badge-time]: https://img.shields.io/npm/v/@aquaron/time?label=time&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgODAwIj48cGF0aCBmaWxsPSIjMzMzIiBkPSJNODAwIDQwMEE0MDAgNDAwIDAgMDA0MDAgMCA0MDAgNDAwIDAgMDAwIDQwMGE0MDAgNDAwIDAgMDA0MDAgNDAwIDQwMCA0MDAgMCAwMDQwMC00MDB6Ii8+PHBhdGggZmlsbD0iI2ZmZGU3NSIgZD0iTTQwMCAxMTMuNmMtNTUuNSAxNjUuMy0yMDkuNiAyMTUtMjA5LjYgMzc5LjIgMCAxMDcgMTAyLjcgMTkzLjYgMjA5LjYgMTkzLjYgMTA2LjcgMCAyMDkuNi04Ni43IDIwOS42LTE5My42IDAtMTU5LjItMTQ0LTIxMC43LTIwOS42LTM3OS4yem0wIDUzMi41Yzg0LjUtMTM5LjctNTMuMy0zMzYuNSAxLjMtNDQwIDI0LjggNDAgNTIuNiA3My4xIDc4LjIgMTAzLjggNTAuMSA1OS43IDg5LjggMTA2LjYgODkuOCAxODIuOSAwIDgwLTgwLjggMTUzLjMtMTY5LjMgMTUzLjN6Ii8+PHBhdGggZD0iTTQwMCAwdjIwOC41Yy0xOS4zIDM5LjQtMTIgOTEuNyAwIDE0OSAxOS43IDk0LjQgNTIuMiAyMDIuMyAwIDI4OC41djE1NGE0MDAgNDAwIDAgMDA0MDAtNDAwQTQwMCA0MDAgMCAwMDQwMCAweiIgb3BhY2l0eT0iLjUiLz48L3N2Zz4K&color=ffde75
