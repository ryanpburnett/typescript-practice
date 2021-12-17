import { log } from "./log";
import { Point } from "./point";
import { p } from "./point";

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

const triangle = new Triangle(p.a, p.b, p.c);
const quad = new Quadralateral(p.a, p.b, p.c, p.d);

triangle.perimeter();
quad.perimeter();