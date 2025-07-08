import { exec } from "node:child_process";

// Note: build before running these tests
// TODO
it.todo('Write file with auto bypass permission prompt', async () => {
    // clean
    const outfile = Bun.file('.cache/flag.json');

    await outfile.delete().catch(() => { });

    const p = exec(`bunx tsx cli.ts just write {on: 1} into ./.cache/flag.json`);
    // exec(p)

    expect(p.exitCode).toBe(0); // expect the process to exit successfully
    expect(p.text()).toContain('flag.json')
    expect(await outfile.exists()).toBe(true)

    expect(await outfile.json()).toEqual({ on: 1 })

    await outfile.delete().catch(() => { });

    // 30 seconds timeout for this test, it usually takes 13s to run (10s for claude to solve this problem, 3s for idle watcher to exit)
}, 30e3);

