var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css')


class App extends React.Component {
    render(){
      return (
        <div>
          Hello React Training!
        </div>
        )
    }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
);