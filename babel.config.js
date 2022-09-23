module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "~/components": "./components",
            "~/utils": "./utils",
            "~/screens": "./screens",
            "~/router": "./router",
            "~/assets": "./assets",
            "~/icons": "./icons",
            "~/hooks": "./hooks",
            "~/constants": "./constants",
            "~/store": "./store",
            "~/databases": "./databases",
            "~/layouts": "./layouts",
            "~/types": "./types",
            "~/localization": "./localization",
            "~/styles": "./styles",
          },
        },
      ],
    ],
  };
};
