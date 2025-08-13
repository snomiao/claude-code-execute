#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import claudeCodeExecute from "./index";
import pkg from "./package.json";
import enhancedMs from "enhanced-ms";

const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 [options...] [--] <prompt...>")
  .option("exitOnIdle", {
    type: "string",
    describe: "Exit after idle timeout (e.g. 10s, 30s, 2m)",
    default: "60s",
  })
  .option("continue", {
    type: "boolean",
    describe: "Continue the previous session",
    default: false,
  })
  .option("verbose", {
    type: "boolean",
    describe: "Enable verbose logging",
    default: false,
  })
  .parserConfiguration({
    "unknown-options-as-args": true,
    "halt-at-non-option": true,
  })
  .help()
  .version(pkg.version)
  .parseSync();

const prompt = argv._.join(" ");
if (!prompt) {
  console.error(`Claude Code Execute CLI v${pkg.version}`);
  console.error("Usage: ccx <prompt> [--exitOnIdle=<timeout>]");
  process.exit(1);
}

console.log(`claude-code-execute@${pkg.version}: `, prompt);
argv.verbose &&
  console.log("[claude-code-execute] running with options:", argv);
const ret = await claudeCodeExecute(prompt, {
  exitOnIdle: !argv.exitOnIdle ? undefined : enhancedMs(argv.exitOnIdle),
  continue: argv.continue,
});

process.exit(ret.exitCode)