[![Gem Version](https://badge.fury.io/rb/classnames-rails.svg)](http://badge.fury.io/rb/classnames-rails)

# classnames-rails

Classnames for Rails - a gem package fork from [classnames](https://github.com/JedWatson/classnames).
A simple javascript utility for conditionally joining classNames together.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'classnames-rails'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install classnames-rails


Remember!! Add the line below in your `application.js`

    //= require classnames

If you need to use dedupe version(option)

    //= require classnames-dedupe

But notice it slow(10x) than original version.

That's it and you can use `classNames` in Rails now.

## Usage

In javascript file you can establish complexity class names together for example: 

```js
var navClass = classNames("navbar", "navbar-default");
// "navbar navbar-default"

var navClass = classNames({
  "navbar": true,
  "navbar-default": false
  "hidden": false
});
// "navbar"

// More examples...
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }) // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

For more information please reference [classNames](https://github.com/JedWatson/classnames)

## Development

2015-05-29 The classnames v2.1.2

## Contributing

Feel free to open an issue ticket if you find something that could be improved.

