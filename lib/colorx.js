/* ================================================================
 * colorx by xdf(xudafeng[at]126.com)
 *
 * first created at : Sat Jun 07 2014 11:10:37 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

"use strict";

var reset = '\u001b[0m';
var colors = {
  red   : '\u001b[31m',
  yellow: '\u001b[33m',
  green : '\u001b[32m',
  blue  : '\u001b[34m',
  purple: '\u001b[35m',
  gray  : '\u001b[37m',
  cyan  : '\u001b[36m'
}

for (var i in colors){
  (function(i){
    Object.prototype[i] = function(){
      return colors[i] + this.valueOf() + reset;
    }
  })(i);
}
