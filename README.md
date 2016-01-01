# fmtr

Awesome string formatting using shell style place holders.

## Installation

    npm install --save fmtr

## API

### fmtr(format, obj)

Parameters:

* `format` string with `${propertyName}` placeholder(s) where `propertyName` is the name of a property of `obj`
* `obj` an object containing values to substitute into the format string.

Returns:

* string

## Example

    "use strict";

    var fmtr = require('fmtr');

    var user = {
        username: 'alice',
        spouse: 'bob',
        enemy: 'eve'
    };

    console.log(fmtr('${username} is married to ${spouse} and hates ${enemy}', user));

    // prints "alice is married to bob and hates eve"

## Testing

    npm test

## License

See [LICENSE.md](https://github.com/tcort/fmtr/blob/master/LICENSE.md)
