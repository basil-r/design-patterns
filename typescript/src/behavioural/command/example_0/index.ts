import { ComplexCommand } from "./concrete/ComplexCommand";
import { Invoker } from "./concrete/Invoker";
import { Receiver } from "./concrete/Receiver";
import { SimpleCommand } from "./concrete/SimpleCommand";

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand("Say Hi!"));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, "Send email", "Save report"));

invoker.doSomethingImportant();
