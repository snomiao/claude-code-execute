#!/usr/bin/env node



import claudeCodeExecute from ".";
import pkg from './package.json';
const prompt = process.argv.slice(2).join(' ')
if (!prompt) {
    console.error("Usage: ccx <prompt>");
    process.exit(1);
}

console.log(`claude-code-execute@${pkg.version}: `, prompt)

await claudeCodeExecute(prompt)