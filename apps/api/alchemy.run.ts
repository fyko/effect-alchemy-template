import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import { Effect } from "effect";
import ApiWorker from "./src/Worker.ts";

/** Deploys the API Worker, or runs it in local workerd under `alchemy dev`. */
export default Alchemy.Stack(
  "Template",
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const api = yield* ApiWorker;

    return { url: api.url };
  }),
);
