import { log } from "./log";
import { Point } from "./point";
import { pointy, pointy2, pointy3, pointy4 } from "./point";

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

class Quadralateral {
    constructor(public point1: Point, public point2: Point, public point3: Point, public point4: Point) {
        
    }

    perimeter() {
        let perimeter: number;

        perimeter = this.point1.getDistance(this.point2) + this.point2.getDistance(this.point3) + this.point3.getDistance(this.point4) + this.point4.getDistance(this.point1)

        log(perimeter);
        return perimeter;
    }

}

const triangle = new Triangle(pointy, pointy2, pointy3);
const quad = new Quadralateral(pointy, pointy2, pointy3, pointy4);

triangle.perimeter();
quad.perimeter();