"use strict";

console.log('app is not running');

var app = {
  title: "Indecision App",
  subtitle: "this is the sub",
  options: ['one', 'two', "three"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  app.options.length > 0 ? "Here are your options" : "No options",
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "one"
    ),
    React.createElement(
      "li",
      null,
      "two"
    ),
    React.createElement(
      "li",
      null,
      "three"
    )
  )
);

var me = {
  name: "rick",
  age: 45,
  location: "Munich"
};
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Im moving  to ",
      location
    );
  } else {
    return "unknown";
  }
}

var temptwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    me.name ? me.name : 'anonymous',
    " "
  ),
  me.age && me.age >= 40 && React.createElement(
    "p",
    null,
    " Age: ",
    me.age
  ),
  getLocation(me.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(temptwo, appRoot);
