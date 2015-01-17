/*
* Smetak Wind Application
* Copyright (c) 2015 Jan Simunek
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

'use strict';

module.exports = {

  // Get updated time from date and time
  getUpdatedTime:function(updatedDateTime) {
    if (updatedDateTime === undefined) return '';
    return updatedDateTime.substring(updatedDateTime.indexOf(' '));
  },

  // Get updated date from date and time
  getUpdatedDate:function(updatedDateTime) {
    if (updatedDateTime === undefined) return '';
    return updatedDateTime.substring(0, updatedDateTime.indexOf(' '));
  },

  // Get wind barb symbol based on wind speed
  // TODO: unit test
  getWindBarbSymbol: function(windSpeed) {
    if (windSpeed === undefined || windSpeed < 1) {
      return String.fromCharCode(13);
    }

    var windSpeedKts = windSpeed * 1.9;
    console.log(windSpeedKts);
    var position = Math.floor(windSpeedKts / 5) + 33 - 1;
    if (position < 33) position = 33;

    return String.fromCharCode(position);
  },

  // Properly rotate windbarb symbol
  getWindBarbDirection: function (windDirection) {
    return windDirection;
  }

};
