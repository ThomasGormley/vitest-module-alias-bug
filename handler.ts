import { getStringFromWithin } from "./string";

export async function handler() {
  const foo = await handleFoo();

  console.log(foo);
}

async function handleFoo() {
  return getStringFromWithin();
}
