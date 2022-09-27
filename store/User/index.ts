import { makeAutoObservable } from "mobx";

class User {
  constructor() {
    makeAutoObservable(this);
  }

  public name: string = "";

  public setUser(name: string): void {
    this.name = name;
  }
}

const UserStore = new User();

export { UserStore };
