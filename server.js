/*
* Smetak Wind Application
* Copyright (c) 2015 Jan Simunek
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

'use strict';

var express = require('express');
var app = express();
var http = require('http');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/build'));

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));

  // Keep application awake from sleeping
  // TODO: Do not call this during development and get application URL from
  // config, not hardcoded.
  setInterval(function() {
    http.get('http://smetak.herokuapp.com');
  }, 300000); // every 5 minutes (300000)
});
