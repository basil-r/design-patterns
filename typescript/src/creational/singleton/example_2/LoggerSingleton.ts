class LoggerSingleton {
  private _logCount: number = 0;
  private static _loggerSingletonInstance: LoggerSingleton;

  private constructor() {}

  static GetInstance(): LoggerSingleton {
    if (LoggerSingleton._loggerSingletonInstance == null) {
      LoggerSingleton._loggerSingletonInstance = new LoggerSingleton();
    }
    return LoggerSingleton._loggerSingletonInstance;
  }
  Log(message: string): void {
    console.log(`${this._logCount}: ${message}`);
    this._logCount++;
  }
}

export { LoggerSingleton };
