function ShaderLoader(e,t){this.fragmentShaders={},this.vertexShaders={},this.simulationShaders={},this.fs=this.fragmentShaders,this.vs=this.vertexShaders,this.ss=this.simulationShaders,this.pathToShaders=e||"/",this.pathToChunks=t||e,this.shaderChunks={},this.shadersLoaded=0,this.shadersToLoad=0}function ShaderLoader(e,t){this.fragmentShaders={},this.vertexShaders={},this.simulationShaders={},this.fs=this.fragmentShaders,this.vs=this.vertexShaders,this.ss=this.simulationShaders,this.pathToShaders=e||"/",this.pathToChunks=t||e,this.shaderChunks={},this.shadersLoaded=0,this.shadersToLoad=0}ShaderLoader.prototype.loadShaderChunk=function(e){var t=this.pathToChunks+"/"+e+".glsl",a=this;$.ajax({url:t,dataType:"text",context:{title:e,path:t},complete:function(e){a.onChunkLoaded(e.responseText,this.title)},error:function(e){console.log("ERROR: Unable to Load Shader"+this.path),a.onChunkLoaded(" NO SHADER LOADED ",this.title)}})},ShaderLoader.prototype.onChunkLoaded=function(e,t){this.shaderChunks[t]=e},ShaderLoader.prototype.load=function(e,t,a){var o=this;this._beginLoad(e,t,a),$.ajax({url:o.pathToShaders+"/"+e+".glsl",dataType:"text",context:{type:a},complete:function(e){o.onShaderLoaded(e.responseText,t,this.type)}})},ShaderLoader.prototype.onShaderLoaded=function(e,t,a){for(var o=e,h=!0,s=o.split("$"),d=1;d<s.length;d++){var r=s[d].split("\n")[0];if(this.shaderChunks[r]){var n=o.split("$"+r);o=n.join(this.shaderChunks[r])}else h=!1,this.loadShaderChunk(r)}if(h)"vertex"==a?this.vertexShaders[t]=o:"fragment"==a?this.fragmentShaders[t]=o:"simulation"==a&&(this.simulationShaders[t]=o),this._endLoad(o,t,a);else{var i=this;setTimeout(function(){i.onShaderLoaded(o,t,a)},300)}},ShaderLoader.prototype._beginLoad=function(e,t,a){this.shadersToLoad++,this.beginLoad(e,t,a)},ShaderLoader.prototype._endLoad=function(e,t,a){this.shadersLoaded++,this.shadersLoaded==this.shadersToLoad&&this.shaderSetLoaded(),this.endLoad(e,t,a)},ShaderLoader.prototype.setValue=function(e,t,a){var o="@"+t,h=!1,s=e.replace(o,function(e){return h=!0,a});return console.log("replaced",h),s},ShaderLoader.prototype.shaderSetLoaded=function(){},ShaderLoader.prototype.endLoad=function(){},ShaderLoader.prototype.beginLoad=function(){},ShaderLoader.prototype.loadShaderChunk=function(e){var t=this.pathToChunks+"/"+e+".glsl",a=this;$.ajax({url:t,dataType:"text",context:{title:e,path:t},complete:function(e){a.onChunkLoaded(e.responseText,this.title)},error:function(e){console.log("ERROR: Unable to Load Shader"+this.path),a.onChunkLoaded(" NO SHADER LOADED ",this.title)}})},ShaderLoader.prototype.onChunkLoaded=function(e,t){this.shaderChunks[t]=e},ShaderLoader.prototype.load=function(e,t,a){var o=this;this._beginLoad(e,t,a),$.ajax({url:o.pathToShaders+"/"+e+".glsl",dataType:"text",context:{type:a},complete:function(e){o.onShaderLoaded(e.responseText,t,this.type)}})},ShaderLoader.prototype.onShaderLoaded=function(e,t,a){for(var o=e,h=!0,s=o.split("$"),d=1;d<s.length;d++){var r=s[d].split("\n")[0];if(this.shaderChunks[r]){var n=o.split("$"+r);o=n.join(this.shaderChunks[r])}else h=!1,this.loadShaderChunk(r)}if(h)"vertex"==a?this.vertexShaders[t]=o:"fragment"==a?this.fragmentShaders[t]=o:"simulation"==a&&(this.simulationShaders[t]=o),this._endLoad(o,t,a);else{var i=this;setTimeout(function(){i.onShaderLoaded(o,t,a)},300)}},ShaderLoader.prototype._beginLoad=function(e,t,a){this.shadersToLoad++,this.beginLoad(e,t,a)},ShaderLoader.prototype._endLoad=function(e,t,a){this.shadersLoaded++,this.shadersLoaded==this.shadersToLoad&&this.shaderSetLoaded(),this.endLoad(e,t,a)},ShaderLoader.prototype.setValue=function(e,t,a){var o="@"+t,h=!1,s=e.replace(o,function(e){return h=!0,a});return console.log("replaced",h),s},ShaderLoader.prototype.shaderSetLoaded=function(){},ShaderLoader.prototype.endLoad=function(){},ShaderLoader.prototype.beginLoad=function(){};