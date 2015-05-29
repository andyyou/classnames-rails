describe("classnames library", function() {
  it("merge two class names to one", function() {
    var c = classNames("foo", "bar");

    expect(c).toEqual("foo bar");
  });

  it("merge two class name with setting boolean in object", function() {
    var c = classNames({
      "foo": true,
      "bar": false
    });

    expect(c).toEqual("foo");
  });

  it("lots of arguments of various types", function() {
    var c = classNames('foo', { bar: true, duck: false }, 'baz', { quux: true });

    expect(c).toEqual("foo bar baz quux");
  });
});