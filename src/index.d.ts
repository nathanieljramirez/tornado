declare const style: Record<
  | "reset"
  | "bold"
  | "dim"
  | "italic"
  | "underline"
  | "inverse"
  | "hidden"
  | "strikethrough"
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "gray"
  | "bgBlack"
  | "bgRed"
  | "bgGreen"
  | "bgYellow"
  | "bgBlue"
  | "bgMagenta"
  | "bgCyan"
  | "bgWhite",
  (text: string) => string
>;
declare const presets: {
  arc: string[];
  line: string[];
};
declare class tornado {
  private interval;
  private write;
  constructor({
    frames,
    speed,
    text,
  }: {
    frames?: string[];
    speed?: number;
    text: string;
  });
  private d;
  succeed: ({ text, symbol }: { text: string; symbol?: string }) => void;
  fail: ({ text, symbol }: { text: string; symbol?: string }) => void;
  warn: ({ text, symbol }: { text: string; symbol?: string }) => void;
}
export { style, presets, tornado };
