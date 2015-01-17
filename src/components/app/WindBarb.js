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
var WindUtils = require('../../utils/WindUtils');

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
      transform: 'rotate(' + WindUtils.getWindBarbDirection(this.state.winddir) + 'deg)'
    };
    var windBarbSymbol = WindUtils.getWindBarbSymbol(this.state.windspeed);
    return (
      /* jshint ignore:start */
      <div className="windbarb">
        <span className="windbarbsymbol" style={rotateStyle}>{windBarbSymbol}</span>
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
