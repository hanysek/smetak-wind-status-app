/*
* Smetak Wind Application
* Copyright (c) 2015 Jan Simunek
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

'use strict';

var React = require('react');
var MeteoDataStore = require('../../stores/MeteoDataStore');

function getStateFromStore() {
  return MeteoDataStore.get();
}

var WindBarb = React.createClass({

  getInitialState: function() {
    return getStateFromStore();
  },

  componentDidMount: function() {
    MeteoDataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MeteoDataStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var rotateStyle = {
      transform: 'rotate(' + this.state.winddir + 'deg)'
    };
    return (
      /* jshint ignore:start */
      <div className="windbarb" style={rotateStyle}>
      <p>&#34;</p>
      </div>
      /* jshint ignore:end */
    );
  },

  componentDidUpdate: function() {
  },

  _onChange: function() {
    this.setState(getStateFromStore());
  }


});

module.exports = WindBarb;
