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
    PageActions.set({pageClass: 'home', title: 'Fueee'});
  },

  render() {
    return (
      /* jshint ignore:start */
      <div className="container">
        <Wind />
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = HomePage;
