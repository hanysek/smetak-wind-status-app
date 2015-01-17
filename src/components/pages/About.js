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
    PageActions.set({pageClass: 'about', title: 'About'});
  },

  render() {
    return (
      /* jshint ignore:start */
      <div className="container">
        <h1>About</h1>
        <p>
          Welcome in simple web page displaying current wind status for <a href="http://www.smetak.banda.cz/" target="_blank">Smeťák Kite Spot</a>.
          Smeťák is the landkiting kite spot in Prague. You can find more info about the spot
          on <a href="http://www.smetak.banda.cz/" target="_blank">http://www.smetak.banda.cz/</a>.
        </p>

        <p>
          I have created this page because I am a professional programmer, I like kiting
          and I needed some simple, but for some people useful project to try new, fancy
          technologies like ReactJS, Flux and others.
        </p>

        <h2>Wind Data Source</h2>

        <p>
          We use <a href="http://www.tsk-praha.cz/wps/portal/root/aktualni-doprava/meteocidla" target="_blank">TSK Praha
           meteo sensors</a> to get actual wind speed and wind direction. We use meteo sensor located in Uhříněves which
          is closed to Smeťák Kite Spot. It means that wind is mostly a little bit stronger on spot:)
        </p>

        <h2>Source Code</h2>

        <p>
          If you are interested in how it is developed you can find source code
          on <a href="https://github.com/hanysek/smetak-wind-status-app" target="_blank">https://github.com/hanysek/smetak-wind-status-app</a>.
        </p>

        <h2>Credits</h2>

        <p>
          <a href="http://www.tsk-praha.cz" target="_blank">TSK
          Praha</a> Meteo information provider for Prague area.
        </p>

        <p>
          <a href="https://github.com/kriasoft/react-starter-kit" target="_blank">React /
          Flux &nbsp;Starter Kit</a> Thanks for good starting point for isomorphic application.
        </p>

        <p>
          <a href="http://www.fonts2u.com/esri-weather.font" target="_blank">ESRI Weather
          font</a> Weather font with wind barbs.
        </p>

        <p>
          <a href="http://www.heroku.com/" target="_blank">Heroku.
          </a> Powered by Heroku
        </p>

      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = AboutPage;
