import { log } from "./log";
import { Point } from "./point";
import { pointy, pointy2, pointy3 } from "./point";

class Triangle {
    constructor(public point1: Point, public point2: Point, public point3: Point) {

    } 

    perimeter() {
        let perimeter: number;

        perimeter = this.point1.getDistance(this.point2) + this.point2.getDistance(this.point3) + this.point3.getDistance(this.point1)

        log(perimeter);
        return perimeter;
    }
}

const triangle = new Triangle(pointy, pointy2, pointy3);

triangle.perimeter();