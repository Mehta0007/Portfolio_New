import type { Options } from "rehype-pretty-code";

const prettyCodeOptions: Options = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  keepBackground: false,
};

export default prettyCodeOptions;
