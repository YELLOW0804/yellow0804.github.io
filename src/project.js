require=function e(t,c,i){function n(r,a){if(!c[r]){if(!t[r]){var o="function"==typeof require&&require;if(!a&&o)return o(r,!0);if(s)return s(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var h=c[r]={exports:{}};t[r][0].call(h.exports,function(e){var c=t[r][1][e];return n(c?c:e)},h,h.exports,e,t,c,i)}return c[r].exports}for(var s="function"==typeof require&&require,r=0;r<i.length;r++)n(i[r]);return n}({Player:[function(e,t,c){"use strict";cc._RFpush(t,"90eb9zKHBNKe5JUmY5TfpnW","Player"),cc.Class({"extends":cc.Component,properties:{jumpHeight:0,jumpDuration:0,maxMoveSpeed:0,accel:0},setJumpAction:function(){var e=cc.moveBy(this.jumpDuration,cc.p(0,this.jumpHeight)).easing(cc.easeCubicActionInOut()),t=cc.moveBy(this.jumpDuration,cc.p(0,-this.jumpHeight)).easing(cc.easeCubicActionInOut());return cc.repeatForever(cc.sequence(e,t))},setInputControl:function(){var e=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(t,c){switch(t){case cc.KEY.a:e.accLeft=!0,e.accRight=!1;break;case cc.KEY.d:e.accLeft=!1,e.accRight=!0}},onKeyReleased:function(t,c){switch(t){case cc.KEY.a:e.accLeft=!1;break;case cc.KEY.d:e.accRight=!1}}},e.node)},onLoad:function(){this.jumpAction=this.setJumpAction(),this.node.runAction(this.jumpAction),this.accLeft=!1,this.accRight=!1,this.xSpeed=0,this.setInputControl()},update:function(e){this.accLeft?this.xSpeed-=this.accel*e:this.accRight&&(this.xSpeed+=this.accel*e),Math.abs(this.xSpeed)>this.maxMoveSpeed&&(this.xSpeed=this.maxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed)),this.node.x+=this.xSpeed*e}}),cc._RFpop()},{}]},{},["Player"]);