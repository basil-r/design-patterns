import { LoggerProviderFactory } from "./concrete/LoggerProviderFactory";
import { LoggingProviders } from "./concrete/LoggingProviders";

function GetTypeOfLoggingProviderFromConfigFile(): LoggingProviders {
  return LoggingProviders.Log4Net;
}

const providerType = GetTypeOfLoggingProviderFromConfigFile();
const logger = LoggerProviderFactory.GetLoggingProvider(providerType);

logger.LogMessage("Hello Factory Method Design Pattern.");


