import { Effect, Layer, Schema } from "effect";
import { HttpApi, HttpApiBuilder, HttpApiEndpoint, HttpApiGroup } from "effect/http-api";

/** Liveness payload returned by `GET /health`. */
export class Health extends Schema.Class<Health>("Health")({
  status: Schema.Literal("ok"),
}) {}

/** Operational endpoints that every deployment exposes. */
export class SystemGroup extends HttpApiGroup.make("System").add(
  HttpApiEndpoint.get("health", "/health", { success: Health }),
) {}

/** Public HTTP contract served by the API Worker. */
export class Api extends HttpApi.make("Api").add(SystemGroup) {}

/** Handlers for the System group. */
const systemHandlers = HttpApiBuilder.group(Api, "System", (handlers) =>
  handlers.handle("health", () => Effect.succeed(new Health({ status: "ok" }))),
);

/** The Api router with every group implemented. */
export const ApiLive = HttpApiBuilder.layer(Api).pipe(Layer.provide(systemHandlers));
