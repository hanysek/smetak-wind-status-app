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

    var windSpeedKts = this.convertWindSpeed(windSpeed);
    var position = Math.floor(windSpeedKts / 5) + 33 - 1;
    if (position < 33) position = 33;

    return String.fromCharCode(position);
  },

  // Properly rotate windbarb symbol
  getWindBarbDirection: function (windDirection) {
    return windDirection;
  },

  // Conver wind speed in m/s to knots/s
  convertWindSpeed: function (windSpeed) {
    return windSpeed * 1.9;
  },


  // Get wind speed color
  getWindSpeedCssClass:function (windSpeed) {
    var windSpeedKts = this.convertWindSpeed(windSpeed);
    if (windSpeedKts <= 4) {
      return 'wind-barb-color-4kts';
    }
    else if (windSpeedKts <= 8) {
      return 'wind-barb-color-8kts';
    }
    else if (windSpeedKts <= 12) {
      return 'wind-barb-color-12kts';
    }
    else if (windSpeedKts <= 16) {
      return 'wind-barb-color-16kts';
    }
    else if (windSpeedKts <= 20) {
      return 'wind-barb-color-20kts';
    }
    else if (windSpeedKts <= 24) {
      return 'wind-barb-color-24kts';
    }
    else if (windSpeedKts <= 28) {
      return 'wind-barb-color-28kts';
    }
    else if (windSpeedKts <= 32) {
      return 'wind-barb-color-32kts';
    }
    else if (windSpeedKts <= 36) {
      return 'wind-barb-color-36kts';
    }
    else if (windSpeedKts > 36) {
      return 'wind-barb-color-40kts';
    }
    else {
      return 'wind-barb-color-4kts';
    }
  }

};
