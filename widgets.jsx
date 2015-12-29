var React = require('react');
var ReactDOM = require('react-dom');

var HelloWidget = require('./hello.jsx');
var AutocompleteWidget = require('./autocomplete.jsx');

var names = [
  'John',
  'Jacob',
  'Joe',
  'Joey',
];

var MyWidgets = React.createClass({
  render: function() {
    return (
      <div>
        <HelloWidget />
        <AutocompleteWidget items = { names } />
      </div>
    );

  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyWidgets />, document.getElementById('my-widgets'));
});
