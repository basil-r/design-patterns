import { Context } from "../concrete/Context";

abstract class State {
  protected context!: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract handle1(): void;
  public abstract handle2(): void;
}

export { State };
