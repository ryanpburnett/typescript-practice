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
        (0, log_1["default"])(perimeter);
        return perimeter;
    };
    return Triangle;
}());
var Quadralateral = /** @class */ (function () {
    function Quadralateral(point1, point2, point3, point4) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.point4 = point4;
    }
    Quadralateral.prototype.perimeter = function () {
        var perimeter;
        perimeter = this.point1.getDistance(this.point2) + this.point2.getDistance(this.point3) + this.point3.getDistance(this.point4) + this.point4.getDistance(this.point1);
        (0, log_1["default"])(perimeter);
        return perimeter;
    };
    return Quadralateral;
}());
var triangle = new Triangle(point_1.p.a, point_1.p.b, point_1.p.c);
var quad = new Quadralateral(point_1.p.a, point_1.p.b, point_1.p.c, point_1.p.d);
triangle.perimeter();
quad.perimeter();
