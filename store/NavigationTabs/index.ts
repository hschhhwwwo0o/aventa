import { makeAutoObservable } from "mobx";

class NavigationTabs {
  public isVisible: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public init() {}

  public setIsVisible(value: boolean) {
    this.isVisible = value;
  }
}

const NavigationTabsStore = new NavigationTabs();

export { NavigationTabsStore };
