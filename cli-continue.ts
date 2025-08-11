#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import claudeCodeExecute from "./index";
import pkg from "./package.json";
import enhancedMs from "enhanced-ms";

const argv = await yargs(hideBin(process.argv))
  .usage("Usage: $0 [options...] <prompt...>")
  .option("exitOnIdle", {
    type: "string",
    describe: "Exit after idle timeout (e.g. 10s, 30s, 2m)",
    default: undefined,
  })
  .option("continue", {
    type: "boolean",
    describe: "Continue the previous session",
    default: true,
  })
  .parserConfiguration({
    "unknown-options-as-args": true,
    "halt-at-non-option": true,
  })
  .help()
  .version(pkg.version)
  .parse();

const prompt = argv._.join(" ");
if (!prompt) {
  console.error(`Claude Code Execute CLI v${pkg.version}`);
  console.error("Usage: ccx <prompt> [--exitOnIdle=<timeout>]");
  process.exit(1);
}

console.log(`claude-code-execute@${pkg.version}: `, prompt);
const { exitOnIdle } = argv;
await claudeCodeExecute(prompt, {
  exitOnIdle: exitOnIdle != null && enhancedMs(exitOnIdle),
  continue: argv.continue,
});
