import { ILogger } from "../abstract/ILogger";

class EnterpriseLogger implements ILogger {
  LogMessage(message: string): void {
    console.log(`EnterpriseLogger: ${message}`);
  }

  LogError(message: string): void {
    console.error(`EnterpriseLogger: ${message}`);
  }

  LogVerboseInformation(message: string): void {
    console.info(`EnterpriseLogger: ${message}`);
  }
}

export { EnterpriseLogger };
