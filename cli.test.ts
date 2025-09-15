import { exec } from "node:child_process";
import { promisify } from "node:util";

// Note: build before running these tests
// TODO
it("Write file with auto bypass permission prompt", async () => {
  // clean
  const outfile = Bun.file(".cache/flag.json");
  await outfile.delete().catch(() => { });

  const p =
    Bun.$`bunx tsx cli.ts --exitOnIdle=8s just write {on: 1} into ./.cache/flag.json and exit`;
  expect(await p.text()).toContain("flag.json");
  expect(await outfile.exists()).toBe(true);
  expect(await outfile.json()).toEqual({ on: 1 });

  // clean
  await outfile.delete().catch(() => { });

  // as for timeout, it usually takes 13s to run (10s for claude to solve this problem, 5s for idle watcher to exit)
}, 60e3);
