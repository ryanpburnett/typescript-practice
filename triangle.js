"use strict";
exports.__esModule = true;
var log_1 = require("./log");
var point_1 = require("./point");
var Triangle = /** @class */ (function () {
    function Triangle(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }
    Triangle.prototype.perimeter = function () {
        var perimeter;
        perimeter = this.point1.getDistance(this.point2) + this.point2.getDistance(this.point3) + this.point3.getDistance(this.point1);
        (0, log_1.log)(perimeter);
        return perimeter;
    };
    return Triangle;
}());
var triangle = new Triangle(point_1.pointy, point_1.pointy2, point_1.pointy3);
triangle.perimeter();
