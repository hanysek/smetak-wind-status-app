/*
* Smetak Wind Application
* Copyright (c) 2015 Jan Simunek
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

'use strict';

var Store = require('../core/Store');
var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');
var WindUtils = require('../utils/WindUtils');
var MeteoUnits = require('../constants/MeteoUnits');

var _meteoData = {};

// Get units from session, check do not run under nodejs
var _units = MeteoUnits.KT;
var isNode = (typeof window === 'undefined' ? true : false);
var Cookies;
if (! isNode) {
  Cookies = require('cookies-js');
  _units = Cookies.get('units') || MeteoUnits.KT;
}

var MeteoDataStore = new Store({

  get: function() {
    return _meteoData;
  },

  set: function(meteoData) {
    _meteoData = meteoData;

    // Convert wind speed in ms to knots
    _meteoData.windspeedKt = WindUtils.convertWindSpeed(_meteoData.windspeed);

    // Set wind speed based on units
    if (_units == MeteoUnits.KT) {
      _meteoData.windSpeedUnits = _meteoData.windspeedKt;
    } else {
      _meteoData.windSpeedUnits = _meteoData.windspeed;
    }
  },

  getUnits: function() {
    return _units;
  },

  setUnits: function() {
    // Toggle units kt or ms
    _units = (_units == MeteoUnits.KT ? MeteoUnits.MS : MeteoUnits.KT);
    Cookies.set('units', _units);
  }

});

MeteoDataStore.dispatcherToken = Dispatcher.register(payload => {
  var action = payload.action;

  // RECEIVE_METEO_DATA action
  if (action.actionType == ActionTypes.RECEIVE_METEO_DATA) {
    MeteoDataStore.set(action.meteoData);

    MeteoDataStore.emitChange();
  }

  // CHANGE_UNITS action
  else if (action.actionType == ActionTypes.CHANGE_UNITS) {
    MeteoDataStore.setUnits();
    MeteoDataStore.set(_meteoData);

    MeteoDataStore.emitChange();
  }

});

module.exports = MeteoDataStore;
