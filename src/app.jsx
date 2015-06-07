var React = require('react');
var A = require('./A.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <A />
      </div>
    );
  }
});

React.render(<App/>, document.body);
