const { tornado, presets, style } = require("../src/index.js");

const spinner = new tornado({
  frames: presets.arc.map((frame) => style.blue(frame)),
  text: "Loading...",
});

setTimeout(() => {
  spinner.succeed({
    text: "Success",
  });
}, 500);
