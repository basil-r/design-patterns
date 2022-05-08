import { ILogger } from "../abstract/ILogger";
import { EnterpriseLogger } from "./EnterpriseLogger";
import { Log4NetLogger } from "./Log4NetLogger";
import { LoggingProviders } from "./LoggingProviders";

class LoggerProviderFactory {
  static GetLoggingProvider(logProviders: LoggingProviders): ILogger {
    switch (logProviders) {
      case LoggingProviders.Enterprise:
        return new EnterpriseLogger();
      case LoggingProviders.Log4Net:
        return new Log4NetLogger();
      default:
        return new EnterpriseLogger();
    }
  }
}

export { LoggerProviderFactory };
