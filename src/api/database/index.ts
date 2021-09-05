import { createConnection, getConnectionOptions } from "typeorm";

console.log('Loading Database')
export default async () => {
  const defaultOptions = await getConnectionOptions();
  return createConnection(Object.assign(defaultOptions))
}