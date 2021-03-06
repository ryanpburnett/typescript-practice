"use strict";
exports.__esModule = true;
exports.p = exports.Point = void 0;
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
        (0, log_1["default"])("a point has been drawn at x = ".concat(this.x, " and y = ").concat(this.y));
    };
    Point.prototype.getDistance = function (another) {
        var distance = Math.sqrt(Math.pow(Math.abs(another.x - this.x), 2) + Math.pow(Math.abs(another.y - this.y), 2));
        (0, log_1["default"])("distance = ".concat(distance));
        return distance;
    };
    return Point;
}());
exports.Point = Point;
var pointy = new Point(3, 4);
var pointy2 = new Point(3, 3);
var pointy3 = new Point(-2, 7);
var pointy4 = new Point(0, 10);
var pointsObj = {
    a: pointy,
    b: pointy2,
    c: pointy3,
    d: pointy4
};
exports.p = pointsObj;
pointy.draw();
pointy.getDistance(pointy2);
(0, log_1["default"])(pointy.x);
