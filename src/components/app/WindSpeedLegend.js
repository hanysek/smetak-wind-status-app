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
var MeteoUnits = require('../../constants/MeteoUnits');
var MeteoActions = require('../../actions/MeteoActions');

function getUnitsFromStore() {
  return { units: MeteoDataStore.getUnits() };
}

var legendScale = {};
legendScale[MeteoUnits.KT] = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
legendScale[MeteoUnits.MS] = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

var WindSpeedLegend = React.createClass({

  getInitialState: function() {
    return getUnitsFromStore();
  },

  componentDidMount: function() {
    MeteoDataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MeteoDataStore.removeChangeListener(this._onChange);
  },

  handleClick: function() {
    MeteoActions.changeUnits();
  },

  render:function() {
    var legend = legendScale[this.state.units];
    return (
    /* jshint ignore:start */
    <div className="windspeedlegend">
      <a href="#" onClick={this.handleClick}>
        <ul className="list-inline windcolors">
          <li className="wind-barb-bgcolor-1">{legend[1]}</li>
          <li className="wind-barb-bgcolor-2">{legend[2]}</li>
          <li className="wind-barb-bgcolor-3">{legend[3]}</li>
          <li className="wind-barb-bgcolor-4">{legend[4]}</li>
          <li className="wind-barb-bgcolor-5">{legend[5]}</li>
          <li className="wind-barb-bgcolor-6">{legend[6]}</li>
          <li className="wind-barb-bgcolor-7">{legend[7]}</li>
          <li className="wind-barb-bgcolor-8">{legend[8]}</li>
          <li className="wind-barb-bgcolor-9">{legend[9]}</li>
          <li className="wind-barb-bgcolor-10">{legend[10]}</li>
        </ul>
      </a>
    </div>
    /* jshint ignore:end */
    );
  },

  componentDidUpdate: function() {
  },

  _onChange: function() {
    this.setState(getUnitsFromStore());
  }

});

module.exports = WindSpeedLegend;
