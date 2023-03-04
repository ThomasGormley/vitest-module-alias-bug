import { getStringFromWithin } from "./string";

export async function handler() {
  const foo = getStringFromWithin();

  console.log(foo);
}
