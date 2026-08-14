import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List Rohit Bhardwaj's portfolio projects with descriptions, tech stack, and GitHub/demo links. Optionally filter by a text query.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .optional()
      .describe("Optional text to match against title, subtitle, description, or stack."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const results = q
      ? projects.filter((p) =>
          [p.title, p.subtitle, p.description, p.stack.join(" ")]
            .join(" ")
            .toLowerCase()
            .includes(q),
        )
      : projects;
    return {
      content: [{ type: "text" as const, text: JSON.stringify(results, null, 2) }],
      structuredContent: { projects: results },
    };
  },
});
