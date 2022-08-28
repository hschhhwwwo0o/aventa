import { makeAutoObservable, runInAction } from "mobx";

type IStatus = "error" | "successfull";

class Notification {
  public isOpen: boolean = false;
  public message: string = "";
  public status: IStatus = "error";

  constructor() {
    makeAutoObservable(this);
  }

  public notify(status: IStatus, message: string): void {
    this.isOpen = true;
    this.message = message;
    this.status = status;

    /** Hide notification */
    runInAction(() => {
      this.isOpen = false;
    });
  }
}

const NotificationStore = new Notification();

export { NotificationStore };
