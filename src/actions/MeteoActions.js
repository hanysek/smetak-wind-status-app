/*
* Smetak Wind Application
* Copyright (c) 2015 Jan Simunek
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

'use strict';

var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');

module.exports = {

  receiveMeteoData: function(meteoData) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.RECEIVE_METEO_DATA,
      meteoData: meteoData
    });
  },

  changeUnits: function() {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.CHANGE_UNITS
    });
  }

};
