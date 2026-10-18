import { recommended as effectRecommended } from "@effect/tsgo/oxlint-presets";
import { defineConfig } from "vite-plus";
import { common, edge, module, typescript } from "eslint-config-neon/oxlint";

const ignorePatterns = [".agents/**", ".claude/**", "repos/**", "tools/oxlint/anti-slop/**"];

export default defineConfig({
  fmt: { ignorePatterns },
  lint: {
    extends: [common, typescript, module, edge, effectRecommended],
    ignorePatterns,
    jsPlugins: [
      { name: "vite-plus", specifier: "vite-plus/oxlint-plugin" },
      { name: "anti-slop", specifier: "./tools/oxlint/anti-slop/index.ts" },
      { name: "anti-slop-effect", specifier: "./tools/oxlint/anti-slop/effect/index.ts" },
    ],
    rules: {
      // Neon overrides. `Effect.gen(function* () {})` is the Effect idiom; naming every generator is noise.
      "func-names": "off",
      // Property signatures check parameters contravariantly and accept `readonly`; method signatures do neither.
      "typescript/method-signature-style": ["error", "property"],
      // Truthiness checks on strings and numbers hide the empty-string and zero cases.
      "typescript/strict-boolean-expressions": [
        "error",
        { allowString: false, allowNumber: false },
      ],
      "oxc/no-accumulating-spread": "error",
      "anti-slop/no-array-filter-map": "error",
      "anti-slop/no-reduce-accumulator-copy": "error",
      "anti-slop/no-chained-type-assertions": "error",
      "anti-slop/no-conditional-empty-object-spread": "error",
      "anti-slop/no-known-value-widening": "error",
      "anti-slop/no-module-mocking": "error",
      "anti-slop/no-object-parameters": "error",
      "anti-slop/no-reflect-apply": "error",
      "anti-slop/no-reflect-get": "error",
      "anti-slop/no-runtime-typeof": "error",
      "anti-slop/no-shape-in-symbol-names": "error",
      "anti-slop/no-unknown-parameters": "error",
      "anti-slop/no-unknown-returns": "error",
      "anti-slop/no-unknown-type-aliases": "error",
      "anti-slop/no-unsafe-dictionary-type": "error",
      "anti-slop/no-widen-then-assert": "error",
      "anti-slop/require-readable-spacing": "error",
      "anti-slop/require-safety-comment-for-type-assertion": "error",
      "anti-slop-effect/no-manual-effect-error-tag": "error",
      "anti-slop-effect/no-manual-tag-comparison": "error",
      "anti-slop-effect/no-manual-tagged-construction": "error",
      "anti-slop-effect/no-service-constructor-imports": "error",
      "anti-slop-effect/prefer-effect-match": "error",
      "typescript/consistent-type-assertions": ["error", { assertionStyle: "never" }],
      "typescript/no-explicit-any": "error",
      "typescript/no-non-null-assertion": "error",
      "typescript/no-unnecessary-type-assertion": "error",
      "typescript/no-unsafe-type-assertion": "error",
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    options: { typeAware: true, typeCheck: true },
  },
  run: {
    cache: {
      scripts: false,
      tasks: true,
    },
  },
});
