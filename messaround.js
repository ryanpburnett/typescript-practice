"use strict";
exports.__esModule = true;
var log_1 = require("./log");
(0, log_1["default"])("hello world");
var arr = [1, 2, 3];
var arr1 = [true, false, null];
var thing;
(function (thing) {
    thing[thing["one"] = 0] = "one";
    thing[thing["two"] = 1] = "two";
    thing[thing["three"] = 2] = "three";
})(thing || (thing = {}));
var two = thing.two;
var message;
message = 'abc';
var logamundo = function (message) { return console.log(message); };
