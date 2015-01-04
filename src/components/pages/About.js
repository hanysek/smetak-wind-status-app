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

var AboutPage = React.createClass({

  statics: {
    layout: App
  },

  componentWillMount() {
    PageActions.set({title: 'About'});
  },

  render() {
    return (
      /* jshint ignore:start */
      <div className="container">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tortor fermentum mi
          fermentum dignissim. Nullam vel ipsum ut ligula elementum lobortis. Maecenas aliquam, massa laoreet
          lacinia pretium, nisi urna venenatis tortor, nec imperdiet tellus libero efficitur metus. Fusce
          semper posuere ligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem pharetra
          commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat augue libero, id consectetur
          tortor bibendum non. Quisque nec fringilla lorem. Nullam efficitur vulputate mauris, nec maximus leo
          dignissim id.
        </p>
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = AboutPage;
