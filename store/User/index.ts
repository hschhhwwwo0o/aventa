import { makeAutoObservable } from "mobx";

class User {
  public name: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  public setUser(name: string): void {
    this.name = name;
  }
}

const UserStore = new User();

export { UserStore };
