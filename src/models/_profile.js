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

var util = require('util');
var reasoner = require('../reasoner');
var utils = require('../utils');
var as = require('linkeddata-vocabs').as;
var Content = require('./_content');

function Profile(expanded, builder) {
  if (!(this instanceof Profile))
    return new Profile(expanded, builder);
  Content.call(this, expanded, builder || Profile.Builder);
}
util.inherits(Profile, Content);

Profile.Builder = function(types,base) {
  if (!(this instanceof Profile.Builder))
    return new Profile.Builder(types,base);
  Content.Builder.call(
    this,
    utils.merge_types(reasoner, as.Profile, types),
    base || new Profile({}));
};
util.inherits(Profile.Builder,Content.Builder);

utils.defineProperty(
  'describes',Profile,
  function() {
    return this.get(as.describes);
  },
  function(val) {
    this.set(as.describes, val);
    return this;
  }
);

module.exports = Profile;
