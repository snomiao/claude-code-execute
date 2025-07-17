// ccx = claude code execution
import claudeYes from "claude-yes";

export default async function claudeCodeExecute(...claudeArgs: string[]) {
    await claudeYes({ claudeArgs, exitOnIdle: 30e3, continueOnCrash: true }) // overwrite default 5e3 for more stable experience
}
