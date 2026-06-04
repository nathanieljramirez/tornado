import { tornado, presets, style } from "../src";

const spinner = new tornado({
  frames: presets.arc.map((frame) => style.blue(frame)),
  text: "Loading...",
});

setTimeout(() => {
  spinner.succeed({
    text: "Success",
  });
}, 500);
