/*
* Smetak Wind Application
* Copyright (c) 2015 Jan Simunek
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

'use strict';

var MeteoActions = require('../actions/MeteoActions');

module.exports = {

  // Get current meteo from TSK Praha service
  // http://www.tsk-praha.cz/tskexport/json/meteocidla/?singleRecord=true&actualdata=true&id=531804
  getMeteoData: function() {
    console.log('Getting meteo data using external source');

    var url = 'http://www.tsk-praha.cz/tskexport/json/meteocidla/?singleRecord=true&actualdata=true&id=531804';
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      success: function(data) {
        MeteoActions.receiveMeteoData(data.results[0]);
      },
      error: function(xhr, status, err) {
        console.log('Error calling meteo data:' + status);
      }
    });


  }

};
