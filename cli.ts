#!/usr/bin/env node



import claudeCodeExecute from "./index";
import pkg from './package.json';
const prompt = process.argv.slice(2).join(' ')
if (!prompt) {
    console.error(`Claude Code Execute CLI v${pkg.version}`);  
    console.error("Usage: ccx <prompt>");
    process.exit(1);
}

console.log(`claude-code-execute@${pkg.version}: `, prompt)

await claudeCodeExecute(prompt)