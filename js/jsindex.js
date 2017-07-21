// JavaScript Document
window.onload=function(){
	var hbg=document.getElementsByTagName('header')[0];
	

 function bgfirst()
         {
			 hbg.style.background="green";
			 setTimeout('bgsecond()',1000);
		 }
 function bgsecond()
         {
			 hbg.style.background="blue";
			 setTimeout('bgthreth()',1000);
		 }
 function bgthreth()
         {
			 hbg.style.background="red";
			 setTimeout('bgfirst()',1000);
		 }
 bgfirst();
 bgsecond();
//bgsecond();
	
}