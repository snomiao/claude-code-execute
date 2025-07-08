#!/usr/bin/env tsx
// ccx = claude code execution

import esMain from "es-main"
import yesClaude from "yes-claude"

if (esMain(import.meta)) {
    const prompt = process.argv.slice(2).join(' ')
    console.log("Claude Code Exec: ", prompt)

    await claudeCodeExecute(prompt)
}

export default async function claudeCodeExecute(prompt: string) {
    await yesClaude({ claudeArgs: [prompt], exitOnIdle: true })
}

