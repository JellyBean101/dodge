// State: DogeIsAwesome.Play

'use strict'

var DogeIsAwesome = {};

DogeIsAwesome.Play = function () {};

DogeIsAwesome.Play.prototype = {

  init: function () {
    console.log("%c Doge is good at dodging, so he has serious skills in that matter. \n Doge is slow (when he isnt dodging), so wait a little ;).", "color:#073642")
  },

  preload: function () {
    this.load.image('background','assests/background.png');
  },

  create: function () {
    this.background = this.add.titleSprite(0,0,320,568,'background');
    this.background.autoScroll(0,5);
    this.background.scale.set(1);
  },

  update: function () {
  }

};
