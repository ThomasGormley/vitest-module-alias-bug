import { expect, it, vi } from "vitest";
import { handler } from "./handler";
import * as gitSpy from "./string";
// import * as outsideSpy from "./get-string";

it("should mock impl", async () => {
  vi.spyOn(gitSpy, "getString").mockReturnValue("return this");
  const consoleSpy = vi.spyOn(console, "log");
  await handler();

  expect(consoleSpy).toBeCalledWith("return this");
});
