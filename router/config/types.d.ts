import { FunctionComponent } from "react";

export interface IRoute {
  name: string;
  component: any;
  options?: any;
}

/** @see https://reactnavigation.org/docs/group/ */
export interface IRoutesGroup {
  name: string;
  routes: IRoute[];
}
