 export namespace geomentry{
    export class Rectangle{ 
        private width:number;
        private height:number;
        /* 
         * Create new object 
         * @param h height of the Rectangle
         * @param w idth of the Rectangle 
         */
        constructor(h:number,w?:number) {
            this.width = w;
            this.height = h;
        }
        get area (){
            return this.height*this.height;
        }

    }

        var area: () => undefined;
        area = function(){
            return undefined;
        }
} 

