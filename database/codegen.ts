
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "**/*.graphql",
  generates: {
    "../types/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
      },
    },
    "./types/graphql.d.ts": {
      plugins: ["typescript-graphql-files-modules"]
    }
  }
};

export default config;
