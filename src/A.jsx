var React = require('react');
var Common = require('./common.jsx')

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <h1>I AM MODULE A</h1>
        <Common />
      </div>
    );
  }
});
