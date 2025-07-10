// ccx = claude code execution

import yesClaude from "yes-claude";

export default async function claudeCodeExecute(prompt: string) {
    await yesClaude({ claudeArgs: [prompt], exitOnIdle: 10e3 })
}

