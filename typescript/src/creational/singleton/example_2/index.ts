import { HardProcessor } from "./HardProcessor";
import { LoggerSingleton } from "./LoggerSingleton";

const logger = LoggerSingleton.GetInstance();
const processor = new HardProcessor(1);

logger.Log("Hard work started...");
processor.ProcessTo(5);
logger.Log("Hard work finished...");
