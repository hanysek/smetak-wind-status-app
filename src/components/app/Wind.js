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
var WindBarb = require('./WindBarb');
var WindUtils = require('../../utils/WindUtils');

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
    var windSpeed = (this.state.windspeed !== undefined ? WindUtils.convertWindSpeed(this.state.windspeed).toFixed(2) : '-');
    var windSpeedCss = 'value ' + WindUtils.getWindSpeedCssClass(this.state.windspeed);
    var windDirection = (this.state.winddir !== undefined ? this.state.winddir : '-');
    var updatedTime = WindUtils.getUpdatedTime(this.state.mdate) || '';
    var updatedDate = WindUtils.getUpdatedDate(this.state.mdate) || '';

    return (
      /* jshint ignore:start */
      <div className="container wind">

        <div className="row">

          <div className="col-xs-6">
            <div className="metric">
              <label>Wind Speed</label>
              <div className={windSpeedCss}>{windSpeed}&nbsp;<span className="unit">kt</span></div>
            </div>
            <div className="metric">
              <label>Wind Direction</label>
              <div className="value">{windDirection}<span className="unit">&deg;</span></div>
            </div>
            <div className="metric datetime">
              <label>Updated</label>
              <div className="value value-time">{updatedTime}</div>
              <div className="value value-date">{updatedDate}</div>
            </div>
          </div>

          <div className="col-xs-6">
            <WindBarb />
          </div>
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
