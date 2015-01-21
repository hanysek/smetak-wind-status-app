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
var WindSpeedLegend = require('../app/WindSpeedLegend');

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

        <WindSpeedLegend />

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
