import { log } from "./log";

class Point {
    // x: number;
    // y: number;

    // constructor(x: number, y: number) {
    //     this.x = x;
    //     this.y = y;
    // }

    // access modifiers allow for more terse syntax, removing the need for instance vars, as well as "this" keyword:
    constructor(public x: number, public y: number) {
        
    }

    draw() {
        log(`a point has been drawn at x = ${this.x} and y = ${this.y}`);
    }

    getDistance(another: Point) {
        let distance: number = Math.sqrt(Math.pow(another.x - this.x, 2) + Math.pow(another.y - this.y, 2))
        log(`distance = ${distance}`);
    }
}

let pointy: Point = new Point(3, 4);
let pointy2: Point = new Point(3, 3);

pointy.draw();
pointy.getDistance(pointy2);
log(pointy.x);