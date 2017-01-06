class bulding{
    constructor (number:number){

    }
    
    private _number : string;
    public get number() : string {
        return this._number;
    }
    public set number(v : string) {
        this._number = v;
    }

    output = function(){
        console.log(this.number);
    }
     
} 