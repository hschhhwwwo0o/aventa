import { makeAutoObservable, runInAction } from "mobx";

type IStatus = "error" | "successfull";

class Notification {
  constructor() {
    makeAutoObservable(this);
  }

  public isOpen: boolean = false;
  public message: string = "";
  public status: IStatus = "error";

  public notify(status: IStatus, message: string): void {
    this.isOpen = true;
    this.message = message;
    this.status = status;

    /** Hide notification */
    runInAction(() => {
      setTimeout(() => {
        this.isOpen = false;
      }, 4000);
    });
  }
}

const NotificationStore = new Notification();

export { NotificationStore };
