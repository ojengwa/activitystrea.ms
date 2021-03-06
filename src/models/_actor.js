/**
 * Copyright 2013 International Business Machines Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Utility library for working with Activity Streams Actions
 * Requires underscorejs.
 *
 * @author James M Snell (jasnell@us.ibm.com)
 */
'use strict';

var vocabs   = require('linkeddata-vocabs');
var util     = require('util');
var reasoner = require('../reasoner');
var utils    = require('../utils');
var AsObject = require('./_object');

function Actor(expanded,builder) {
  if (!(this instanceof Actor))
    return new Actor(expanded, builder);
  AsObject.call(this, expanded, builder || Actor.Builder);
}
util.inherits(Actor, AsObject);

Actor.Builder = function(types, base) {
  if (!(this instanceof Actor.Builder))
    return new Actor.Builder(types, base);
  AsObject.Builder.call(
    this,
    utils.merge_types(reasoner, vocabs.as.Actor,types),
    base || new Actor({}));
};
util.inherits(Actor.Builder, AsObject.Builder);

module.exports = Actor;
