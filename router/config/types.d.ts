import { FunctionComponent } from "react";

export interface IRoute {
  name: string;
  component: FunctionComponent<IScreen>;
}
