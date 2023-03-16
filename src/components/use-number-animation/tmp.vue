<template>
<div class="odometer animated fadeIn" ref="odoid">{{ num }}</div>
 
</template>

<script setup>

import $ from 'jquery'
import Odometer from 'odometer'
import { onMounted ,ref,toRef,unref } from 'vue';

import '../../css/odometer-theme-minimal.css' // OK
import '../../css/odometer-theme-digital.css' // OK
import '../../css/odometer-theme-plaza.css'  // ok
import '../../css/odometer-theme-car.css' // ok
import '../../css/odometer-theme-train-station.css' // ok 

var odoid = ref(null);
var num = ref(null);

onMounted(()=>{
    var odometer = new Odometer({ 
        el: odoid.value,
        value: 4444, 
        format: "(,ddd).dd",
        theme: 'train-station', // minimal,digital,plaza,car,train-station.
        duration: 3000
    });

    // Format    -  Example
    // (,ddd)    -  12,345,678
    // (,ddd).dd -  12,345,678.09
    // (.ddd),dd -  12.345.678,09
    // ( ddd),dd -  12 345 678,09
    // d         -  12345678
    odometer.render();

    odoid.value.textContent="6666";
}
  )
 

</script>

<style>
 @import url("../../css/animate.min.css");
 @import url("../../css/normalize.min.css");
 /* @import url("../../css/odometer-theme-minimal.css"); */

 .odometer {
  font-size: 60px;
  margin: 200px 0;
  text-align: center;
  width: 100%;
  -webkit-animation-duration: 3s;
          animation-duration: 3s;
}
</style>