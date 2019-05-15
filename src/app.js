

var layer=require("./layer/layer.js")
require('./layer/layer.css')
require('./layer/style.scss')

const App =function(){
	var app=document.getElementById("app");
	app.innerHTML = layer().tpl({
		name:'tplarr',
		arr:["arr1","arr2"]
	})
}

new App()