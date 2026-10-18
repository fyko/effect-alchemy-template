import * as Cloudflare from "alchemy/Cloudflare";
import * as Http from "alchemy/Http";
import { Effect, Layer } from "effect";
import { HttpRouter } from "effect/http";
import { ApiLive } from "./Api.ts";

/** Cloudflare Worker that serves the Api over HTTP. */
export default class ApiWorker extends Cloudflare.Worker<ApiWorker>()(
  "Api",
  { main: import.meta.url },
  Effect.gen(function* () {
    return {
      fetch: yield* HttpRouter.toHttpEffect(ApiLive.pipe(Layer.provide(Http.Platform))),
    };
  }),
) {}
