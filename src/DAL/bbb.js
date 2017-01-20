"use strict";
var DAL;
(function (DAL) {
    class dog {
    }
    DAL.dog = dog;
    class Hamster {
    }
    class Accessory {
        constructor(name, value) {
            this.name = name;
            this.value = value;
        }
    }
    class Car {
    }
    DAL.Car = Car;
    var car = new Car();
    var accessories = [];
    accessories.push(new Accessory('radio', 'sony260'), new Accessory('spoiler', 'fritz'));
    car.accessories = accessories;
    car.fullDrive = true;
    car.speed = 100;
    toastr.success(JSON.stringify(car, null, 2));
    toastr.options = {
        allowHtml: true,
        closeButton: true,
        onclick: () => { alert('WTF'); },
        tapToDismiss: false,
        progressBar: true,
        target: '#toaster-parent',
    };
})(DAL || (DAL = {}));
//# sourceMappingURL=bbb.js.map