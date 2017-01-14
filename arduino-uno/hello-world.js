'use strict';

const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  // Create a standard `led` component instance
  let led = new five.Led(13);

  // "blink" the led in 500ms
  // on-off phase periods
  led.blink(500);
});
