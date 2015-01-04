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

var _meteoData = {};

var MeteoDataStore = new Store({

  get() {
    return _meteoData;
  }

});

MeteoDataStore.dispatcherToken = Dispatcher.register(payload => {
  var action = payload.action;

  if (action.actionType == ActionTypes.RECEIVE_METEO_DATA) {
    _meteoData = action.meteoData;
    MeteoDataStore.emitChange();
  }

});

module.exports = MeteoDataStore;
