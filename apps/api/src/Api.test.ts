import * as Http from "alchemy/Http";
import { Layer } from "effect";
import { HttpRouter } from "effect/http";
import { expect, test } from "vite-plus/test";
import { ApiLive } from "./Api.ts";

test("GET /health returns ok", async () => {
  const { handler, dispose } = HttpRouter.toWebHandler(ApiLive.pipe(Layer.provide(Http.Platform)), {
    disableLogger: true,
  });

  try {
    const response = await handler(new Request("http://localhost/health"));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: "ok" });
  } finally {
    await dispose();
  }
});
