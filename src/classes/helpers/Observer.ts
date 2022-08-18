import { IAny } from "@/types";

interface IObserver {
  setContext(context: IAny): void
  subscribe(name: string, fn: IAny): void
  unsubscribe(name: string): void
  broadcast(name: string, data?: IAny): void
  checkObserver(): void
}

let observer: Array<any> = []

/**
 * @class $Observer - Класс для хранения и передачи контекста
 * @implements IObserver
 */
class $Observer implements IObserver {
  context: IAny

  public setContext(context: IAny): void {
    this.context = context
  }

  public subscribe(name: string, fn: IAny): void {
    observer.push({
      name,
      fn
    })
  }

  public unsubscribe(name: string): void {
    observer = observer.filter((subscribe) => subscribe.name !== name)
  }

  public broadcast(name: string, data?: IAny): void {
    observer.forEach((subscribe) => {
      if (subscribe.name === name) {
        subscribe.fn(data)
      }
    })
  }

  public checkObserver(): void {
    console.log('CHECK OBSERVER', observer)
  }
}

export default new $Observer()
