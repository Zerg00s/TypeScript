"use strict";
var geomentry;
(function (geomentry) {
    class Rectangle {
        /*
         * Create new object
         * @param h height of the Rectangle
         * @param w idth of the Rectangle
         */
        constructor(h, w) {
            this.width = w;
            this.height = h;
        }
        get area() {
            return this.height * this.height;
        }
    }
    geomentry.Rectangle = Rectangle;
    var area;
    area = function () {
        return undefined;
    };
})(geomentry = exports.geomentry || (exports.geomentry = {}));
//# sourceMappingURL=geometry.js.map