"use strict";var sec=document.getElementsByTagName("section")[0];function carousel(t){this.parent=t,this.imgs=t.getElementsByTagName("img"),this.btn=t.getElementsByTagName("button"),this.lis=t.getElementsByTagName("li"),this.j=0,this.timer=null}carousel.prototype.init=function(){this.band(),this.dsq()},carousel.prototype.calc=function(t){return this.j+=t,2<this.j&&(this.j=0),this.j<0&&(this.j=2),this.j},carousel.prototype.animate=function(t){this.j=t;for(var i=this,s=0;s<i.imgs.length;s++)i.imgs[s].className="",i.lis[s].className="";this.imgs[this.j].className="active",this.lis[this.j].className="active"},carousel.prototype.band=function(){for(var t=this,i=0;i<t.btn.length;i++)t.btn[i].onclick=function(){"&gt;"==this.innerHTML?t.animate(t.calc(1)):t.animate(t.calc(-1))};for(i=0;i<t.lis.length;i++)t.lis[i].onclick=function(){t.animate(parseInt(this.getAttribute("n")))};this.parent.onmouseover=function(){t.dsq()},this.parent.onmouseout=function(){t.dsq()}},carousel.prototype.dsq=function(){var t=this;this.timer?(clearInterval(this.timer),this.timer=null):this.timer=setInterval(function(){t.animate(t.calc(1))},1e3)};var car=new carousel(sec);car.init();