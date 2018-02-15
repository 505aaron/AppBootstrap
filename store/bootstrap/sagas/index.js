import initializeConnection, { NAME as connection } from "./connection";
export const BOOTSTRAPPERS = {
  [connection]: false
};

export default [initializeConnection];
