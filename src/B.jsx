var React = require('react');
var Common = require('./common.jsx')

var B = React.createClass({
  render: function () {
    return (
      <div>
        <h1>I AM MODULE B</h1>
        <Common />
      </div>
    );
  }
});

React.render(<B />, document.body);
