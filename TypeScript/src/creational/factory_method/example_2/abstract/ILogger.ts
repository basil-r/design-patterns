interface ILogger {
  LogMessage(message: string): void;
  LogError(message: string): void;
  LogVerboseInformation(message: string): void;
}

export { ILogger };
