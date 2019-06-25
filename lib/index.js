/**
 * @fileoverview Force flow comment.
 * @author Eirikur
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
    configs: {
        recommended: {
          plugins: ["flow-header"],
          rules: {
              "flow-header/flow-header": 2
          }
        }
    },
    rules: requireIndex(__dirname + "/rules")
}
