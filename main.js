var bulding = (function () {
    function bulding(number) {
        this.output = function () {
            console.log(this.number);
        };
    }
    Object.defineProperty(bulding.prototype, "number", {
        get: function () {
            return this._number;
        },
        set: function (v) {
            this._number = v;
        },
        enumerable: true,
        configurable: true
    });
    return bulding;
}());
//# sourceMappingURL=main.js.map