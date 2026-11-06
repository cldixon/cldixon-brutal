import { defineBrutal } from "@brutal-ai/server/config";

// Your settings are in brutal.config.json (`bun run setup` writes it).
export default defineBrutal({ dir: import.meta.dirname });
