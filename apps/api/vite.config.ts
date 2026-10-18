import { defineConfig } from "vite-plus";

/** Alchemy lifecycle tasks for the production stage; all uncached because they touch live state. */
export default defineConfig({
  run: {
    tasks: {
      "plan:production": {
        cache: false,
        command: "alchemy plan --stage production",
      },
      "deploy:production": {
        cache: false,
        command: "alchemy deploy --stage production --yes",
      },
      "destroy:production": {
        cache: false,
        command: "alchemy destroy --stage production",
      },
    },
  },
});
