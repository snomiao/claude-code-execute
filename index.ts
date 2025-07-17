// ccx = claude code execution
import claudeYes from "claude-yes";

export default async function claudeCodeExecute(prompt: string) {
    await claudeYes({ claudeArgs: [prompt], exitOnIdle: 30e3, continueOnCrash: true }) // overwrite default 5e3 for more stable experience
}
