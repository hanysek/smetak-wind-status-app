/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var PageActions = require('../../actions/PageActions');
var App = require('../layout/App');
var Wind = require('../app/Wind');

var HomePage = React.createClass({

  statics: {
    layout: App
  },

  componentWillMount() {
    PageActions.set({pageClass: 'home', title: 'Fiů, fiů, fí'});
  },

  render() {
    return (
      /* jshint ignore:start */
      <div className="container">
        <Wind />

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

        <ul className="list-unstyled">
          <li><a href="http://www.windguru.cz/cz/index.php?sc=192127"
            target="_blank" className="btn btn-default">
            <span className="glyphicon glyphicon-link" aria-hidden="true"></span> Forecast on Windguru</a>
          </li>
        </ul>
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = HomePage;
