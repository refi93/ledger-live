import { table } from "table";
import chalk from "chalk";

const transactions: Map<string, Transaction> = new Map();

const getUniqueColor = (_n: number | string) => {
  let n = typeof _n === "string" ? parseInt(_n) : _n;
  const rgb = [0, 0, 0];

  for (let i = 0; i < 24; i++) {
    rgb[i % 3] <<= 1;
    rgb[i % 3] |= n & 0x01;
    n >>= 1;
  }

  const hex =
    "#" +
    rgb.reduce(
      (a, c) => (c > 0x0f ? c.toString(16) : "0" + c.toString(16)) + a,
      ""
    );

  return hex;
};

const timingColorizer = (value: number, fast = 0.5, medium = 1, slow = 5) => {
  if (value < fast) {
    return chalk.green;
  } else if (value >= fast && value < medium) {
    return chalk.yellow;
  } else if (value >= medium && value < slow) {
    return chalk.magenta;
  }
  return chalk.red;
};

class Span {
  private _start = 0;
  private _end = 0;
  private _id = "";
  private _op = "";
  private _description = "";
  private _data;

  constructor({
    op,
    data,
  }: {
    op?: string;
    description?: string;
    data?: Record<string, any>;
  }) {
    if (!process.argv.includes("--verbose")) {
      return;
    }

    const now = Date.now();
    this._start = now;
    this._start = now;
    this._op = op || "";
    this._data = data;
    this._id = this._start.toString(10).substr(5, 13);
  }

  finish(): void {
    if (process.argv.includes("--verbose")) {
      this._end = Date.now();
    }
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._op;
  }

  get time(): string {
    const timing = (this._end - this._start) / 1000;
    return timing.toFixed(3);
  }

  get id(): string {
    return this._id;
  }

  get data(): Record<string, any> {
    return this._data;
  }

  get start(): number {
    return this._start;
  }

  get end(): number {
    return this._end;
  }
}

class Transaction {
  private _id = "";
  private _name = "";
  private _start = 0;
  private _end = 0;
  private _spans: Span[] = [];
  private _parent: Transaction | string | undefined = undefined;
  private _children: Transaction[] = [];

  constructor({
    name,
    parent,
    id,
  }: {
    name: string;
    parent?: string | Transaction;
    id?: string;
  }) {
    if (!process.argv.includes("--verbose")) {
      return;
    }

    const now = Date.now();
    this._start = now;
    this._end = now;
    this._name = name;
    this._id =
      id ??
      this._start
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 8);
    this._parent = parent;
    this.setChildren();

    console.log("constructor", {
      name: this._name,
      parent: this._parent,
      childen: this._children,
    });
  }

  setChildren(parent?: string | Transaction): void {
    if (this._parent) {
      const parentTx = transactions.get(
        (this?._parent as Transaction)?.id || (this?._parent as string) || ""
      );

      this._parent = parentTx?.id || parent || "";
      parentTx?._children?.push(this);
    }
  }

  startChild({
    op,
    description,
    data,
  }: {
    op?: string;
    description?: string;
    data?: Record<string, any>;
  }): Span {
    const span = new Span({ op, description, data });
    this._spans.push(span);

    return span;
  }

  finish(): void {
    if (process.argv.includes("--verbose")) {
      this._end = Date.now();

      console.log("finish", {
        name: this._name,
        parent: this._parent,
        children: this._children,
      });

      if (!this._parent) {
        this.timetable();
      }

      this._children.forEach((tx) => {
        tx.timetable();
      });
    }
  }

  get id(): string {
    return this._id;
  }

  get time(): string {
    const timing = (this._end - this._start) / 1000;
    return timing.toFixed(3);
  }

  timetable() {
    const timetable = this._spans.map((span, i) => {
      const isSameThread = this._spans[i - 1]?.id === span.id;

      return [
        isSameThread
          ? "\n"
          : chalk.bgHex(getUniqueColor(span.id)).black.dim(span.id),
        `• ${span.name}`,
        span.data ? JSON.stringify(span.data) : "",
        timingColorizer(parseFloat(span.time))(span.time + "s"),
      ];
    });
    const footerColorizer = timingColorizer(parseFloat(this.time), 5, 15, 30);
    const footer = ["", "", "", footerColorizer(`TOTAL: ${this.time}s`)];

    console.log(
      table([...timetable, footer], {
        columnDefault: {
          width: 10,
        },
        columns: [
          { alignment: "center", width: 10 },
          { alignment: "center", width: 30 },
          { alignment: "center", width: 100 },
          { alignment: "right", width: 20 },
        ],
        spanningCells: [
          {
            col: 0,
            row: timetable.length,
            colSpan: 3,
          },
        ],
        header: {
          alignment: "center",
          content: chalk.bold(this._name),
        },
        drawHorizontalLine: (lineIndex, lineCount) => {
          const linesBeforeContent = 2;
          const indexOfSpan = lineIndex - linesBeforeContent;

          const isLinesOfTitle = lineIndex <= linesBeforeContent - 1;
          const isLastLine = lineIndex === lineCount;
          if (isLinesOfTitle || isLastLine) {
            return true;
          }

          const isSameTread =
            this._spans[indexOfSpan]?.id !== this._spans[indexOfSpan + 1]?.id;
          return isSameTread;
        },
      })
    );

    return timetable;
  }
}

export default {
  startTransaction({
    name,
    parent,
    id,
  }: {
    name: string;
    parent?: Transaction | string;
    id?: string;
  }): Transaction {
    const tx = new Transaction({ name, parent, id });
    transactions.set(tx.id, tx);

    return tx;
  },

  findTransactionById(id: string): Transaction | null {
    return transactions.get(id) || null;
  },
};
