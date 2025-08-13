// ccx = claude code execution
import claudeYes from "claude-yes";

export default async function claudeCodeExecute(
  prompt: string,
  options: {
    exitOnIdle?: number;
    continue?: boolean;
    verbose?: boolean;
  } = {}
) {
  const claudeArgs = [...(!options.continue ? [] : ["--continue"]), prompt];
  const exitOnIdle = options.exitOnIdle || 60e3; // overwrite default for more stable experience
  const props = { claudeArgs, exitOnIdle, continueOnCrash: true };
  options.verbose &&
    console.log("[claude-code-execute] running claude-yes with props: ", props);
  return await claudeYes(props);
}

export { removeControlCharacters } from "claude-yes";
