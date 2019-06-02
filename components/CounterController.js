"use strict";
function UpDownCounter() {
   const ctrl = this;
   ctrl.count = 0;

   ctrl.goUp = function(){
     ctrl.count++;
   }
   ctrl.goDown = function(){
     ctrl.count--;
   }
 }

 angular.module('MyApp').component('upDownCounter', {
   template: `
       <div class="container">
          <div><button ng-click="$ctrl.goUp()">Up</button></div>
          <div>{{$ctrl.count}}<div>
          <div><button ng-click="$ctrl.goDown()">Down</button></div>
       </div>
       `, // or use templateUrl
   controller: UpDownCounter
 });