 /// <reference path="../../typings/globals/toastr/index.d.ts" />
import { geomentry } from "./../geometry";
namespace DAL{
   export class dog{}

   interface Animal{
       speed:number;
       predator:boolean;
   }

   class Hamster implements Animal{
       speed:number;
       predator:boolean;
   }


    class Accessory{
        constructor(public name:string, public value:string) {
            
        }
    }

   interface IAuto{
       fullDrive:boolean;
       speed:number;
       accessories:Accessory[];
   }

   interface ITruck extends IAuto{
       weight:number;
       bedsize:string;
   }

   export class Car implements IAuto{
       fullDrive:boolean;
       speed:number;
       accessories:Accessory[];
   }

   var car = new Car();
   var accessories:Accessory[] = []
   accessories.push(new Accessory('radio','sony260'), new Accessory('spoiler','fritz'));
   car.accessories = accessories;
   car.fullDrive = true;
   car.speed = 100;


   toastr.success(JSON.stringify(car, null, 2));
   toastr.options = {
       allowHtml:true,
       closeButton:true,
       onclick: ()=>{alert('WTF')},
       tapToDismiss: false,
       progressBar:true,
       target: '#toaster-parent',
       
   };
}