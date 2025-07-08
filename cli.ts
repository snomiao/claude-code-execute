#!/usr/bin/env node

import claudeCodeExecute from ".";

const prompt = process.argv.slice(2).join(' ')
if (!prompt) {
    console.error("Usage: ccx <prompt>");
    process.exit(1);
}
console.log("Claude Code Exec: ", prompt)

await claudeCodeExecute(prompt)