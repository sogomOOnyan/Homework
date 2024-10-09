class Console {
  constructor(type) {
    this.type = type;
    this.history = [];
  }

  log(...args) {
    const message = args
      .map((argument) => {
        if (typeof argument === "object" && argument !== null) {
          return JSON.stringify(argument);
        }
        return String(argument);
      })
      .join();
    this.history.push(message);
    console.log(message);
  }

  history(range) {
    if (range) {
      const [start, end] = range;
      return this.history.slice(start, end).join("\n");
    }
    return this.history.join("\n");
  }

  clearHistory() {
    this.history = [];
  }
}

const myConsole = new Console("Regular");
myConsole.log("Hello, world!");
myConsole.log("Hello, world!", 42);
myConsole.log(["vaxinak", "petrograd"]);
