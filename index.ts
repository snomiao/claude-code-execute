// ccx = claude code execution
import yesClaude from "yes-claude";

export default async function claudeCodeExecute(prompt: string) {
    await yesClaude({ claudeArgs: ['-c', prompt], exitOnIdle: 30e3 }) // overwrite default 5e3 for more stable experience
}
