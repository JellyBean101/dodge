// State: DogeIsAwesome.Play

'use strict'

var DogeIsAwesome = {};

DogeIsAwesome.Play = function () {};

DogeIsAwesome.Play.prototype = {

  init: function () {
    console.log("%c Doge is good at dodging, so he has serious skills in that matter. \n Doge is slow (when he isnt dodging), so wait a little ;).", "color:#073642")
  },

  preload: function () {
    this.load.image('background','assets/Doge BG.png');
    this.load.spritesheet('doge','assets/Dodger',38,67,1);
  },

  create: function () {
    //BG
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.scale.set(1);
    this.background.animations.add('blink');
    this.background.animations.play('blink',2,true);
    //Dodger
    this.dodger = this.add.sprite(160,60,'dodger');
    this.dodger.smoothed = false;
    this.dodger.anchor.set(0.5,0.5);
  },

  update: function () {
  }

};
