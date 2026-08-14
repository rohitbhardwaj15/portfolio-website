import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listProjectsTool from "./tools/list-projects";
import listSkillsTool from "./tools/list-skills";

export default defineMcp({
  name: "portfolio-website",
  title: "portfolio website",
  version: "0.1.0",
  instructions:
    "Tools for Rohit Bhardwaj's developer portfolio. Use `get_profile` for his role, summary, and public contact links, `list_projects` to browse or search his projects, and `list_skills` for his technical toolkit. All data is public portfolio content.",
  tools: [getProfileTool, listProjectsTool, listSkillsTool],
});
