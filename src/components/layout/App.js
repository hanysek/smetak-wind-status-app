/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var PageStore = require('../../stores/PageStore');
var Link = require('../common/Link');
var Navbar = require('../layout/Navbar');

/**
 * Retrieves the current page metadata from the PageStore.
 * @returns {{title: string}}
 */
function getState() {
  return {
    pageClass: PageStore.get().pageClass,
    title: PageStore.get().title
  };
}

var DefaultLayout = React.createClass({

  mixins: [PageStore.Mixin],

  getInitialState() {
    return getState();
  },

  componentDidMount() {
    PageStore.emitChange();
  },

  render() {
    var pageClass = 'main page ' + this.state.pageClass;
    return (
      /* jshint ignore:start */
      <div>
        <Navbar />

        <div className={pageClass} role="main">
          {this.props.children}
        </div>

        <div className="navbar-footer">
          <div className="container">
            <p className="text-muted">
              <span>© Jan Šimůnek</span>
              <span><Link to="/">Home</Link></span>
              <span><Link to="/about">About</Link></span>
            </p>
          </div>
        </div>
      </div>
      /* jshint ignore:end */
    );
  },

  /**
   * Event handler for 'change' events coming from the PageStore.
   */
  onChange() {
    this.setState(getState());
  }
});

module.exports = DefaultLayout;
