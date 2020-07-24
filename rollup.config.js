import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

import pkg from "./package.json";

const isProduction = process.env.BUILD === "production";

console.log(
  `ROLLUP -- Building for ${isProduction ? "PRODUCTION" : "DEVELOPMENT"}`
);

const plugins = [
  replace({
    "process.env.NODE_ENV": isProduction
      ? JSON.stringify("production")
      : JSON.stringify("development"),
  }),
  alias({
    entries: [
      { find: "vue", replacement: require.resolve("vue/dist/vue.esm.js") },
    ],
  }),
  vue({ needMap: false }),
  json(),
  resolve({ browser: true, preferBuiltins: false }),
  commonjs(),
];

if (isProduction) {
  plugins.push(terser());
} else {
  plugins.push(
    serve({ open: true, port: 8111, contentBase: "" }),
    livereload("dist")
  );
}

const outputs = [
  {
    input: "./src/main.js",
    plugins,
    output: {
      file: pkg.module,
      format: "es",
      sourcemap: !isProduction,
    },
  },
];

if (isProduction) {
  outputs.push({
    input: "./src/main.js",
    plugins,
    output: {
      file: pkg.main,
      name: "BIMDataViewer",
      format: "umd",
      sourcemap: !isProduction,
    },
  });
}

export default outputs;
