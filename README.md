# @aquaron/time

Time utilities

## Setup to test locally
This is my first attempt in making, testing and publishing npm modules.

### Make global link to local module
```sh
$ cd aquaron/time
$ sudo npm link

/usr/local/lib/node_modules/@aquaron/time -> /code/svelte/time
```

### Using the local module
```sh
$ mkdir ../test
$ cd ../test
$ npm link @aquaron/time
$ echo "require('@aquaron/time').printMsg();" > test.js
$ node test
```

