import { exec } from "node:child_process";
import { promisify } from "node:util";

// Note: build before running these tests
// TODO
it("Write file with auto bypass permission prompt", async () => {
  // clean
  const outfile = Bun.file(".cache/flag.json");
  await outfile.delete().catch(() => {});

  const ret =
    await Bun.$`bunx tsx cli.ts --exitOnIdle=3s just write {on: 1} into ./.cache/flag.json and exit`;
  expect(ret.text()).toContain("flag.json");
  expect(await outfile.exists()).toBe(true);
  expect(await outfile.json()).toEqual({ on: 1 });

  // clean
  await outfile.delete().catch(() => {});

  // as for timeout, it usually takes 13s to run (10s for claude to solve this problem, 3s for idle watcher to exit)
}, 60e3);
