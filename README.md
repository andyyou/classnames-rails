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


Remember!! Add the line below in your application.js

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

After checking out the repo, run `bin/setup` to install dependencies. Then, run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release` to create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

1. Fork it ( https://github.com/[my-github-username]/classnames-rails/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
