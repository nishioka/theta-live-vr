THREE.VRControls=function(e,o){function n(e){var o=e.filter(function(e){return-1!==e.deviceName.toLowerCase().indexOf("oculus")});return o.length>=1?e.filter(function(e){return-1===e.deviceName.toLowerCase().indexOf("cardboard")}):e}function t(e){e=n(e);for(var t=0;t<e.length;t++)e[t]instanceof PositionSensorVRDevice&&i.push(e[t]);o&&o("HMD not available")}var r=this,i=[];navigator.getVRDevices&&navigator.getVRDevices().then(t),this.scale=1,this.update=function(){for(var o=0;o<i.length;o++){var n=i[o],t=n.getState();null!==t.orientation&&e.quaternion.copy(t.orientation),null!==t.position&&e.position.copy(t.position).multiplyScalar(r.scale)}},this.resetSensor=function(){for(var e=0;e<i.length;e++){var o=i[e];void 0!==o.resetSensor?o.resetSensor():void 0!==o.zeroSensor&&o.zeroSensor()}},this.zeroSensor=function(){console.warn("THREE.VRControls: .zeroSensor() is now .resetSensor()."),this.resetSensor()},this.dispose=function(){i=[]}},THREE.VRControls=function(e,o){function n(e){var o=e.filter(function(e){return-1!==e.deviceName.toLowerCase().indexOf("oculus")});return o.length>=1?e.filter(function(e){return-1===e.deviceName.toLowerCase().indexOf("cardboard")}):e}function t(e){e=n(e);for(var t=0;t<e.length;t++)e[t]instanceof PositionSensorVRDevice&&i.push(e[t]);o&&o("HMD not available")}var r=this,i=[];navigator.getVRDevices&&navigator.getVRDevices().then(t),this.scale=1,this.update=function(){for(var o=0;o<i.length;o++){var n=i[o],t=n.getState();null!==t.orientation&&e.quaternion.copy(t.orientation),null!==t.position&&e.position.copy(t.position).multiplyScalar(r.scale)}},this.resetSensor=function(){for(var e=0;e<i.length;e++){var o=i[e];void 0!==o.resetSensor?o.resetSensor():void 0!==o.zeroSensor&&o.zeroSensor()}},this.zeroSensor=function(){console.warn("THREE.VRControls: .zeroSensor() is now .resetSensor()."),this.resetSensor()},this.dispose=function(){i=[]}};