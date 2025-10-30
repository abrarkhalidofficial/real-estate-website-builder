declare module "@puckeditor/puck" {
  import * as React from "react";
  export type Config = any;
  export interface PuckProps {
    config?: Config;
    data?: any;
    onPublish?: (data: any) => void;
    onChange?: (data: any) => void;
  }
  export const Puck: React.ComponentType<PuckProps>;
  export default Puck;
}
