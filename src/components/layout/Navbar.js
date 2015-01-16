/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var Link = require('../common/Link');

var Navbar = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Smeťák Kite Spot Wind Status</Link>
          </div>
        </div>
      </nav>
      /* jshint ignore:end */
    );
  }

});

module.exports = Navbar;
