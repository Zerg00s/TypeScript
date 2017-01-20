 /// <reference path="typings/globals/toastr/index.d.ts" />
 /// <reference path="src/DAL/aaa.ts" />
  /// <reference path="src/DAL/bbb.ts" />
 window.onload = function(){
     toastr.success('hello');
 }

 // + use namespace instead of modules
 // + spread namespace in two files
 // - interfaces, implements
 // - new vs constructor
 // - http://stackoverflow.com/questions/17865620/typescript-multiple-inheritance-workarounds
 // - inherit from multiple interfaces
 // - generic
 // - casting <Object>
 // - ...Car[]
 // - function start(callback:(a:string)=>void){ }
 // - function foo(lal:string|number){}


function foo(lal:string|number){}

//same namespace across multiple files:
var CAR:DAL.cat = new DAL.cat();
var CAR:DAL.dog = new DAL.dog();