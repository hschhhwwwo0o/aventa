import { makeAutoObservable } from "mobx";

class NavigationTabs {
  public isVisible: boolean = false;
  public navigate: any;

  constructor() {
    makeAutoObservable(this);
  }

  public init(navigate: INavigation["navigate"]): void {
    this.navigate = navigate;
  }

  public setIsVisible(value: boolean): void {
    this.isVisible = value;
  }
}

const NavigationTabsStore = new NavigationTabs();

export { NavigationTabsStore };
