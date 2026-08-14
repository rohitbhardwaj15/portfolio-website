import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Rohit Bhardwaj's public profile: role, summary, and public contact links (email, GitHub, LinkedIn).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(profile, null, 2) }],
    structuredContent: { profile },
  }),
});
