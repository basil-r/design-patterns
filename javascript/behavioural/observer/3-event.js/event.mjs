const event = (eventhandlers = new Map()) => ({
  on(name, handler) {
    if (!eventhandlers.has(name)) {
      eventhandlers.set(name, new Set());
    }

    eventhandlers.get(name).add(handler);

    return handler;
  },

  off(name, handler) {
    eventhandlers.get(name)?.delete(handler);
  },

  emit(name, ...args) {
    const handlers = eventhandlers.get(name);

    if (!handlers) return;

    for (const handler of handlers) handler(...args);
  },
});

export default event();
