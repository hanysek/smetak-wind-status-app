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

var Wind = React.createClass({

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
    var windSpeed = this.state.windspeed || '-';
    var windDirection = this.state.winddir || '-';
    var updated = this.state.mdate || '';
    return (
      /* jshint ignore:start */
      <div>
        <div className="wind">
          <div className="metric">
            <label>Wind Speed</label>
            <div className="value">{windSpeed}&nbsp;<span className="unit">m/s</span></div>
          </div>
          <div className="metric">
            <label>Wind Direction</label>
            <div className="value">{windDirection}<span className="unit">&deg;</span></div>
          </div>
        </div>
        <div className="datetime">
          <label>Updated</label>: {updated}
        </div>
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

module.exports = Wind;
