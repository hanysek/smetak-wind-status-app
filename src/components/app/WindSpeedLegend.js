/*
* Smetak Wind Application
* Copyright (c) 2015 Jan Simunek
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

'use strict';

var React = require('react');

var WindSpeedLegend = React.createClass({

  render:function() {
    return (
    /* jshint ignore:start */
    <div className="windspeedlegend">
        <ul className="list-inline windcolors">
        <li className="wind-barb-bgcolor-4kts">4</li>
        <li className="wind-barb-bgcolor-8kts">8</li>
        <li className="wind-barb-bgcolor-12kts">12</li>
        <li className="wind-barb-bgcolor-16kts">16</li>
        <li className="wind-barb-bgcolor-20kts">20</li>
        <li className="wind-barb-bgcolor-24kts">24</li>
        <li className="wind-barb-bgcolor-28kts">28</li>
        <li className="wind-barb-bgcolor-32kts">32</li>
        <li className="wind-barb-bgcolor-36kts">36</li>
        <li className="wind-barb-bgcolor-40kts">40</li>
      </ul>
    </div>
    /* jshint ignore:end */
    );
  }
});

module.exports = WindSpeedLegend;
