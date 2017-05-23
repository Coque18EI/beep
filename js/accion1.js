// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.notification.beep(1);
		});//Tap del beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(10000);
		});//Tap del vibrar
	},true);//deviceready
});//ready