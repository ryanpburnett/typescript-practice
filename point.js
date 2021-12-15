"use strict";
exports.__esModule = true;
exports.pointy4 = exports.pointy3 = exports.pointy2 = exports.pointy = exports.Point = void 0;
var log_1 = require("./log");
var Point = /** @class */ (function () {
    // x: number;
    // y: number;
    // constructor(x: number, y: number) {
    //     this.x = x;
    //     this.y = y;
    // }
    // access modifiers allow for more terse syntax, removing the need for instance vars, as well as "this" keyword:
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        (0, log_1.log)("a point has been drawn at x = ".concat(this.x, " and y = ").concat(this.y));
    };
    Point.prototype.getDistance = function (another) {
        var distance = Math.sqrt(Math.pow(Math.abs(another.x - this.x), 2) + Math.pow(Math.abs(another.y - this.y), 2));
        (0, log_1.log)("distance = ".concat(distance));
        return distance;
    };
    return Point;
}());
exports.Point = Point;
var pointy = new Point(3, 4);
exports.pointy = pointy;
var pointy2 = new Point(3, 3);
exports.pointy2 = pointy2;
var pointy3 = new Point(-2, 7);
exports.pointy3 = pointy3;
var pointy4 = new Point(0, 10);
exports.pointy4 = pointy4;
pointy.draw();
pointy.getDistance(pointy2);
(0, log_1.log)(pointy.x);
