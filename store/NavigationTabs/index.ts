import { makeAutoObservable } from "mobx";

class NavigationTabs {
  constructor() {
    makeAutoObservable(this);
  }

  public isVisible: boolean = false;
  public navigate: INavigation["navigate"] | undefined;

  public init(navigate: INavigation["navigate"]): void {
    this.navigate = navigate;
  }

  public setIsVisible(isVisible: boolean): void {
    this.isVisible = isVisible;
  }
}

const NavigationTabsStore = new NavigationTabs();

export { NavigationTabsStore };
