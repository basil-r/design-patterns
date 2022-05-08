import { ILogger } from "../abstract/ILogger";

class Log4NetLogger implements ILogger {
  LogMessage(message: string): void {
    console.log(`Log4Net: ${message}`);
  }

  LogError(message: string): void {
    console.error(`Log4Net: ${message}`);
  }

  LogVerboseInformation(message: string): void {
    console.info(`Log4Net: ${message}`);
  }
}

export { Log4NetLogger };
