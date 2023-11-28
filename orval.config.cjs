/* eslint-env node */
module.exports = {
    ocgClientFetch: {
      input: {
        target: "../OCG_backend/src/main/resources/openapi.yml",
      },
      output: {
        client: "swr",
        workspace: "./src/api/generated-sources/ocgClientFetch/",
        target: "ocgApi.ts",
        mode: "tags-split",
        clean: true,
        override: {
          mutator: {
            path: "../../ocgClientFetchInstance.ts",
            name: "ocgClientFetchInstance",
          },
        },
      },
      hooks: {
        afterAllFilesWrite: "prettier --write",
      },
    },
  };
  