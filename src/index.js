import { stdout } from "process";

const style = (() => {
  const s = {
    reset: 0,
    bold: 1,
    dim: 2,
    italic: 3,
    underline: 4,
    inverse: 7,
    hidden: 8,
    strikethrough: 9,
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    white: 37,
    gray: 90,
    bgBlack: 40,
    bgRed: 41,
    bgGreen: 42,
    bgYellow: 43,
    bgBlue: 44,
    bgMagenta: 45,
    bgCyan: 46,
    bgWhite: 47,
  };

  const x = {};
  for (const key in s) {
    if (Object.prototype.hasOwnProperty.call(s, key)) {
      x[key] = (text) => `\x1b[${s[key]}m${text}\x1b[0m`;
    }
  }
  return x;
})();

const presets = {
  arc: ["◜", "◠", "◝", "◞", "◡", "◟"],
  line: ["-", "\\", " | ", " / "],
};

class tornado {
  interval = null;
  write(text) {
    stdout.write(text);
    if (this.interval) {
      clearInterval(this.interval);
      stdout.write("\r");
    }
  }

  constructor({
    frames = presets.arc,
    speed = 75,
    text,
  }) {
    let i = 0;

    this.interval = setInterval(() => {
      stdout.write(`\r${frames[i]} ${text}`);
      i = (i + 1) % frames.length;
    }, speed);
  }

  d(s) {
    return ({ text, symbol = s }) => {
      this.write(`\r${symbol} ${text}\n`);
    };
  }

  succeed = this.d(style.green("✓"));
  fail = this.d(style.red("×"));
  warn = this.d(style.yellow("▲"));
}

export { style, presets, tornado };
