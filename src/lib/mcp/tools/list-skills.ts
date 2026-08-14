import { defineTool } from "@lovable.dev/mcp-js";
import { skillGroups } from "../data";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description:
    "List Rohit Bhardwaj's technical skills grouped by area (frontend, backend, database, creative, tools, core CS).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(skillGroups, null, 2) }],
    structuredContent: { groups: skillGroups },
  }),
});
